const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

declare const Deno: {
  serve(handler: (req: Request) => Response | Promise<Response>): void;
  env: {
    get(key: string): string | undefined;
  };
};

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string | null;
  project_type?: string | null;
  message?: string | null;
  lang?: string;
};

const defaultToEmail = "sales@londeoaccess.com.hk";
const defaultFromEmail = "Londeo Website <sales@londeoaccess.com.hk>";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const payload = (await req.json()) as ContactPayload;
    const submission = normalizePayload(payload);

    if (!submission.name || !submission.company || !submission.email) {
      return json({ error: "Missing required fields" }, 400);
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      return json({ error: "Missing RESEND_API_KEY" }, 500);
    }

    const to = Deno.env.get("CONTACT_TO_EMAIL") || defaultToEmail;
    const from = Deno.env.get("CONTACT_FROM_EMAIL") || defaultFromEmail;
    const subject = `New Londeo enquiry from ${submission.company || submission.name}`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: submission.email,
        subject,
        text: buildTextEmail(submission),
        html: buildHtmlEmail(submission),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return json({ error: "Email provider failed", detail }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    console.error("send-contact-email error", error);
    return json({ error: "Unable to send enquiry email" }, 500);
  }
});

function normalizePayload(payload: ContactPayload) {
  return {
    name: (payload.name || "").trim(),
    company: (payload.company || "").trim(),
    email: (payload.email || "").trim(),
    whatsapp: (payload.whatsapp || "").trim(),
    project_type: (payload.project_type || "").trim(),
    message: (payload.message || "").trim(),
    lang: (payload.lang || "").trim(),
  };
}

function buildTextEmail(submission: ReturnType<typeof normalizePayload>) {
  return [
    "New enquiry from londeoaccess.com.hk",
    "",
    `Name: ${submission.name}`,
    `Company: ${submission.company}`,
    `Email: ${submission.email}`,
    `WhatsApp: ${submission.whatsapp || "-"}`,
    `Project type: ${submission.project_type || "-"}`,
    `Language: ${submission.lang || "-"}`,
    "",
    "Message:",
    submission.message || "-",
  ].join("\n");
}

function buildHtmlEmail(submission: ReturnType<typeof normalizePayload>) {
  const rows = [
    ["Name", submission.name],
    ["Company", submission.company],
    ["Email", submission.email],
    ["WhatsApp", submission.whatsapp || "-"],
    ["Project type", submission.project_type || "-"],
    ["Language", submission.lang || "-"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5">
      <h2 style="margin:0 0 16px">New enquiry from londeoaccess.com.hk</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #e5e7eb;padding:8px 10px;font-weight:700;background:#f9fafb">${escapeHtml(label)}</td>
                <td style="border:1px solid #e5e7eb;padding:8px 10px">${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
      <h3 style="margin:20px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(submission.message || "-")}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}
