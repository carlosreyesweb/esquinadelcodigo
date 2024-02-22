import { clientEnvironment } from "@/environment"
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clientEnvironment.baseUrl}/sitemap.xml`,
  }
}
