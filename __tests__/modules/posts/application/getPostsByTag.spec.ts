import { Post } from '@/modules/posts'
import { getPostsByTag } from '@/modules/posts/application/getPostsByTag'
import { StoryblokPostMapper } from '@/modules/posts/infrastructure/StoryblokPostMapper'
import { StoryblokPostRepository } from '@/modules/posts/infrastructure/StoryblokPostRepository'
import { posts } from '../../../fixtures/mockData.json'

const repository = new StoryblokPostRepository(new StoryblokPostMapper())

function mockGetByTag(posts: Post[]) {
  return (tag: string) => {
    const filteredPosts = posts.filter((post) => post.tags.includes(tag))
    return Promise.resolve(filteredPosts)
  }
}

describe('[usecase] getPostsByTag', () => {
  beforeEach(() => {
    jest.spyOn(repository, 'getByTag').mockImplementation(mockGetByTag(posts))
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it(`Every post returned should include the tag provided by the request`, async () => {
    const TAG = 'Destacado'
    const result = await getPostsByTag(repository)(TAG)
    const expected = result.every((post) => post.tags.includes(TAG))

    expect(expected).toBe(true)
  })
})
