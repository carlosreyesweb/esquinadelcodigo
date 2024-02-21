export const clientEnvironment = Object.freeze({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
});

export const serverEnvironment = Object.freeze({
  storyblokToken: process.env.STORYBLOK_TOKEN,
});
