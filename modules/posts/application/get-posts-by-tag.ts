import { PostRepository } from "../domain/post-repository"

export function getPostsByTag(repo: PostRepository) {
  return async (tag: string) => {
    const posts = await repo.getByTag(tag)
    return posts
  }
}
