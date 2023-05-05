import { PostRepository } from '../domain/PostRepository'

export function searchPosts(repo: PostRepository) {
  return async (query: string) => {
    const posts = await repo.search(query)
    return posts
  }
}
