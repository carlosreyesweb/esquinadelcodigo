declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GA_MEASUREMENT_ID?: string
      NEXT_PUBLIC_BASE_URL: string
      NEXT_PUBLIC_STORYBLOK_TOKEN: string
    }
  }
}

export {}
