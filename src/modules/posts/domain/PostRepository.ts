import { Post } from './Post'

export interface PostRepository {
  index(): Promise<Post[]>
  search(term: string): Promise<Post[]>
  getBySlug(slug: string): Promise<Post | undefined>
  getByTag(tag: string): Promise<Post[]>
  getRelatedByTags(tags: string[], excludingSlug: string): Promise<Post[]>
}
