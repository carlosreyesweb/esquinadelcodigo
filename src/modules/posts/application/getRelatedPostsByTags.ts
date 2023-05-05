import { PostRepository } from '../domain/PostRepository'

export function getRelatedPostsByTags(repo: PostRepository) {
  return async (tags: string[], excludingSlug: string) => {
    const posts = await repo.getRelatedByTags(tags, excludingSlug)
    return posts
  }
}
