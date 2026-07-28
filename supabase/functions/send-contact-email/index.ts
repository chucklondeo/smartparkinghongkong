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
  enquiry_type?: string | null;
  product?: string | null;
  project_location?: string | null;
  quantity?: string | null;
  current_system?: string | null;
  message?: string | null;
  lang?: string;
  source_page?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  /** Honeypot — real visitors never see or fill this field; bots that autofill every input will. */
  website?: string;
};

const defaultToEmail = "sales@londeoaccess.com.hk";
const defaultFromEmail = "Londeo Website <sales@londeoaccess.com.hk>";

// Basic in-memory rate limit — resets whenever the function instance is recycled.
// Not a substitute for infrastructure-level rate limiting, but stops naive scripted abuse.
const recentSubmissions = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_PER_WINDOW = 5;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const payload = (await req.json()) as ContactPayload;

    // Honeypot: a real browser never fills this hidden field in.
    if (payload.website && payload.website.trim() !== "") {
      return json({ ok: true }); // pretend success so the bot doesn't learn anything
    }

    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(clientIp)) {
      return json({ error: "Too many requests, please try again shortly" }, 429);
    }

    const submission = normalizePayload(payload);

    if (!submission.name || !submission.company || !submission.enquiry_type) {
      return json({ error: "Missing required fields" }, 400);
    }
    if (!submission.email && !submission.whatsapp) {
      return json({ error: "Provide an email address or WhatsApp number" }, 400);
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
        ...(submission.email ? { reply_to: submission.email } : {}),
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

function isRateLimited(clientIp: string): boolean {
  const now = Date.now();
  Array.from(recentSubmissions.entries()).forEach(([ip, lastResetAt]) => {
    if (now - lastResetAt > RATE_LIMIT_WINDOW_MS) recentSubmissions.delete(ip);
  });
  const key = `${clientIp}:count`;
  const windowKey = `${clientIp}:window`;
  const windowStart = recentSubmissions.get(windowKey);
  if (!windowStart || now - windowStart > RATE_LIMIT_WINDOW_MS) {
    recentSubmissions.set(windowKey, now);
    recentSubmissions.set(key, 1);
    return false;
  }
  const count = (recentSubmissions.get(key) as number) || 0;
  if (count >= RATE_LIMIT_MAX_PER_WINDOW) return true;
  recentSubmissions.set(key, count + 1);
  return false;
}

function normalizePayload(payload: ContactPayload) {
  return {
    name: (payload.name || "").trim(),
    company: (payload.company || "").trim(),
    email: (payload.email || "").trim(),
    whatsapp: (payload.whatsapp || "").trim(),
    enquiry_type: (payload.enquiry_type || "").trim(),
    product: (payload.product || "").trim(),
    project_location: (payload.project_location || "").trim(),
    quantity: (payload.quantity || "").trim(),
    current_system: (payload.current_system || "").trim(),
    message: (payload.message || "").trim(),
    lang: (payload.lang || "").trim(),
    source_page: (payload.source_page || "").trim(),
    utm_source: (payload.utm_source || "").trim(),
    utm_medium: (payload.utm_medium || "").trim(),
    utm_campaign: (payload.utm_campaign || "").trim(),
  };
}

function buildTextEmail(submission: ReturnType<typeof normalizePayload>) {
  return [
    "New enquiry from londeoaccess.com.hk",
    "",
    `Name: ${submission.name}`,
    `Company: ${submission.company}`,
    `Email: ${submission.email || "-"}`,
    `WhatsApp: ${submission.whatsapp || "-"}`,
    `Enquiry type: ${submission.enquiry_type || "-"}`,
    `Product: ${submission.product || "-"}`,
    `Project location: ${submission.project_location || "-"}`,
    `Quantity: ${submission.quantity || "-"}`,
    `Current system: ${submission.current_system || "-"}`,
    `Language: ${submission.lang || "-"}`,
    `Source page: ${submission.source_page || "-"}`,
    `UTM: source=${submission.utm_source || "-"} medium=${submission.utm_medium || "-"} campaign=${submission.utm_campaign || "-"}`,
    "",
    "Message:",
    submission.message || "-",
  ].join("\n");
}

function buildHtmlEmail(submission: ReturnType<typeof normalizePayload>) {
  const rows = [
    ["Name", submission.name],
    ["Company", submission.company],
    ["Email", submission.email || "-"],
    ["WhatsApp", submission.whatsapp || "-"],
    ["Enquiry type", submission.enquiry_type || "-"],
    ["Product", submission.product || "-"],
    ["Project location", submission.project_location || "-"],
    ["Quantity", submission.quantity || "-"],
    ["Current system", submission.current_system || "-"],
    ["Language", submission.lang || "-"],
    ["Source page", submission.source_page || "-"],
    ["UTM source / medium / campaign", `${submission.utm_source || "-"} / ${submission.utm_medium || "-"} / ${submission.utm_campaign || "-"}`],
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
