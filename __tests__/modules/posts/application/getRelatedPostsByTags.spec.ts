import { Post } from '@/modules/posts'
import { getRelatedPostsByTags } from '@/modules/posts/application/getRelatedPostsByTags'
import { StoryblokPostMapper } from '@/modules/posts/infrastructure/StoryblokPostMapper'
import { StoryblokPostRepository } from '@/modules/posts/infrastructure/StoryblokPostRepository'
import { posts } from '../../../fixtures/mockData.json'

const repository = new StoryblokPostRepository(new StoryblokPostMapper())

function mockGetRelatedByTags(posts: Post[]) {
  return (tags: string[], excludedSlug: string) => {
    const relatedPosts = posts.filter(
      (post) =>
        tags.some((tag) => post.tags.includes(tag)) &&
        post.slug !== excludedSlug
    )
    return Promise.resolve(relatedPosts)
  }
}

const CURRENT_POST_TAGS = ['Destacado', 'Tutoriales']
const CURRENT_POST_SLUG = 'this-en-javascript'

describe('[usecase] getRelatedPostsByTags', () => {
  beforeEach(() => {
    jest
      .spyOn(repository, 'getRelatedByTags')
      .mockImplementation(mockGetRelatedByTags(posts))
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it(`Every related post should include at least one of the tags provided by the current post`, async () => {
    const result = await getRelatedPostsByTags(repository)(
      CURRENT_POST_TAGS,
      CURRENT_POST_SLUG
    )
    const expected = result.every((post) =>
      post.tags.some((tag) => CURRENT_POST_TAGS.includes(tag))
    )

    expect(expected).toBe(true)
  })

  it(`Should exclude the current post slug from related posts`, async () => {
    const result = await getRelatedPostsByTags(repository)(
      CURRENT_POST_TAGS,
      CURRENT_POST_SLUG
    )
    const expected = result.find((post) => post.slug === CURRENT_POST_SLUG)

    expect(expected).toBeUndefined()
  })
})
