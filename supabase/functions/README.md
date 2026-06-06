# Supabase Edge Functions

## send-contact-email

This function sends contact form enquiries to the sales inbox using Resend.

Required Supabase secrets:

```bash
supabase secrets set RESEND_API_KEY="re_..."
supabase secrets set CONTACT_TO_EMAIL="sales@londeoaccess.com.hk"
supabase secrets set CONTACT_FROM_EMAIL="Londeo Website <sales@londeoaccess.com.hk>"
```

Deploy:

```bash
supabase functions deploy send-contact-email
```

`CONTACT_FROM_EMAIL` must be a sender address verified in Resend. Keep the API key in Supabase secrets only; never add it to the Next.js `.env.local` file.
