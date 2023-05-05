export const config = {
  host: process.env.NEXT_PUBLIC_HOST,
  siteName: 'La Esquina del Código',
  tagline: 'Un blog de Carlos Reyes',
  storyblokToken: process.env.STORYBLOK_TOKEN,
  env: process.env.NODE_ENV,
  sendGrid: {
    apiKey: process.env.SENDGRID_API_KEY,
    listId: process.env.SENDGRID_LIST_ID,
  },
  hCaptcha: {
    siteKey: process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY,
    secret: process.env.HCAPTCHA_SECRET,
  },
}
