// @Infrastructure
import { StoryblokPostMapper } from './infrastructure/StoryblokPostMapper'
import { StoryblokPostRepository } from './infrastructure/StoryblokPostRepository'
// @Application
import { getAllPosts } from './application/getAllPosts'
import { getPostBySlug } from './application/getPostBySlug'
import { getPostsByTag } from './application/getPostsByTag'
import { getRelatedPostsByTags } from './application/getRelatedPostsByTags'
import { searchPosts } from './application/searchPosts'
// @Domain
import { PostRepository } from './domain/PostRepository'
export type { Post } from './domain/Post'
export type { PostMapper } from './domain/PostMapper'
export type { PostRepository } from './domain/PostRepository'

export const storyblokPostMapper = new StoryblokPostMapper()
export const storyblokPostRepository = new StoryblokPostRepository(
  storyblokPostMapper
)
export const postsService = createServiceWithUseCases(storyblokPostRepository)

function createServiceWithUseCases(repo: PostRepository) {
  return {
    getAllPosts: getAllPosts(repo),
    getPostBySlug: getPostBySlug(repo),
    getPostsByTag: getPostsByTag(repo),
    getRelatedPostsByTags: getRelatedPostsByTags(repo),
    searchPosts: searchPosts(repo),
  }
}
