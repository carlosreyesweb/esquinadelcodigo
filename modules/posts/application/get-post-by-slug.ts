import { PostRepository } from "../domain/post-repository"

export function getPostBySlug(repo: PostRepository) {
  return async (slug: string) => {
    const post = await repo.getBySlug(slug)
    return post
  }
}
