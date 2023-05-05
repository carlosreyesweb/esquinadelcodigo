import { Post } from '@/modules/posts'
import { getPostBySlug } from '@/modules/posts/application/getPostBySlug'
import { StoryblokPostMapper } from '@/modules/posts/infrastructure/StoryblokPostMapper'
import { StoryblokPostRepository } from '@/modules/posts/infrastructure/StoryblokPostRepository'
import { posts } from '../../../fixtures/mockData.json'

const repository = new StoryblokPostRepository(new StoryblokPostMapper())

function mockGetBySlug(posts: Post[]) {
  return (slug: string) => {
    const post = posts.find((post) => post.slug === slug)
    return post
      ? Promise.resolve(post)
      : Promise.reject(new Error('Post not found'))
  }
}

enum SLUGS {
  VALID = 'this-en-javascript',
  INVALID = 'this-is-not-a-valid-slug',
}

describe('[usecase] getPostBySlug', () => {
  beforeEach(() => {
    jest.spyOn(repository, 'getBySlug').mockImplementation(mockGetBySlug(posts))
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it(`Should throw an error if post does not exist`, async () => {
    await expect(getPostBySlug(repository)(SLUGS.INVALID)).rejects.toThrow()
  })

  it(`Should return a post if post exists`, async () => {
    const result = await getPostBySlug(repository)(SLUGS.VALID)
    expect(result).toBeDefined()
  })
})
