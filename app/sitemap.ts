import { clientEnvironment } from "@/environment"
import { postsModule } from "@/modules/posts"
import { MetadataRoute } from "next"

const route = (pathname: string) => `${clientEnvironment.baseUrl}${pathname}`
const lastModified = new Date()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await postsModule.getAllPosts()
  const urls = posts.map((post) => ({
    url: route(`/${post.slug}`),
    lastModified,
    priority: 0.8,
  }))

  return [
    {
      url: route("/"),
      lastModified,
      priority: 1,
    },
  ].concat(urls)
}
