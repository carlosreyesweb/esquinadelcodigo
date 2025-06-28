declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string
      NEXT_PUBLIC_GTM_ID?: string
      STORYBLOK_TOKEN: string
    }
  }
}

export {}
