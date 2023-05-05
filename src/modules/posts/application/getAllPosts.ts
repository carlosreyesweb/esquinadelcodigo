import { PostRepository } from '../domain/PostRepository'

export function getAllPosts(repo: PostRepository) {
  return async () => {
    const posts = await repo.index()
    return posts
  }
}
