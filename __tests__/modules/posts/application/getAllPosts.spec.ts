import { Post } from '@/modules/posts'
import { getAllPosts } from '@/modules/posts/application/getAllPosts'
import { StoryblokPostMapper } from '@/modules/posts/infrastructure/StoryblokPostMapper'
import { StoryblokPostRepository } from '@/modules/posts/infrastructure/StoryblokPostRepository'
import { posts } from '../../../fixtures/mockData.json'

const repository = new StoryblokPostRepository(new StoryblokPostMapper())

function mockIndex(posts: Post[]) {
  return () => Promise.resolve(posts)
}

describe('[usecase] getAllPosts', () => {
  beforeEach(() => {
    jest.spyOn(repository, 'index').mockImplementation(mockIndex(posts))
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('Should return all posts', async () => {
    const result = await getAllPosts(repository)()

    expect(result).toEqual(posts)
  })
})
