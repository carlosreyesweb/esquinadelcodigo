import { PostRepository } from "../domain/post-repository"

export function getAllPosts(repo: PostRepository) {
  return async () => {
    const posts = await repo.index()
    return posts
  }
}
