import { Post } from '@/modules/posts'
import { searchPosts } from '@/modules/posts/application/searchPosts'
import { StoryblokPostMapper } from '@/modules/posts/infrastructure/StoryblokPostMapper'
import { StoryblokPostRepository } from '@/modules/posts/infrastructure/StoryblokPostRepository'
import { posts } from '../../../fixtures/mockData.json'

const repository = new StoryblokPostRepository(new StoryblokPostMapper())

function mockSearch(posts: Post[]) {
  return (query: string) => {
    const lowerCaseQuery = query.toLowerCase()
    const searchResults = posts.filter(
      (post) =>
        post.content.toLowerCase().includes(lowerCaseQuery) ||
        post.title.toLowerCase().includes(lowerCaseQuery)
    )
    return Promise.resolve(searchResults)
  }
}

enum QUERIES {
  VALID = 'this en JavaScript',
  INVALID = 'how to code in Java',
  EMPTY = '',
}

describe('[usecase] searchPosts', () => {
  beforeEach(() => {
    jest.spyOn(repository, 'search').mockImplementation(mockSearch(posts))
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it(`Should return only one post for query "${QUERIES.VALID}"`, async () => {
    const result = await searchPosts(repository)(QUERIES.VALID)
    expect(result).toHaveLength(1)
  })

  it('Should return all posts for an empty query', async () => {
    const result = await searchPosts(repository)(QUERIES.EMPTY)
    expect(result).toEqual(posts)
  })

  it(`Should return no posts for query "${QUERIES.INVALID}"`, async () => {
    const result = await searchPosts(repository)(QUERIES.INVALID)
    expect(result).toHaveLength(0)
  })
})
