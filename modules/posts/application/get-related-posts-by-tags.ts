import { PostRepository } from '../domain/post-repository'

export function getRelatedPostsByTags(repo: PostRepository) {
  return async (tags: string[], excludingSlug: string) => {
    const posts = await repo.getRelatedByTags(tags, excludingSlug)
    return posts
  }
}
