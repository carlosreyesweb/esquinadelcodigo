export const clientEnvironment = Object.freeze({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
})

export const serverEnvironment = Object.freeze({
  storyblokToken: process.env.STORYBLOK_TOKEN,
})
