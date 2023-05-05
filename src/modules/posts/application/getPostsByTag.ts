import { PostRepository } from '../domain/PostRepository'

export function getPostsByTag(repo: PostRepository) {
  return async (tag: string) => {
    const posts = await repo.getByTag(tag)
    return posts
  }
}
