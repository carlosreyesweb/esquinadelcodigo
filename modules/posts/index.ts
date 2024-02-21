// @Infrastructure
import { StoryblokPostMapper } from "./infrastructure/storyblok-post-mapper";
import { StoryblokPostRepository } from "./infrastructure/storyblok-post-repository";
// @Application
import { getAllPosts } from "./application/get-all-posts";
import { getPostBySlug } from "./application/get-post-by-slug";
import { getPostsByTag } from "./application/get-posts-by-tag";
import { getRelatedPostsByTags } from "./application/get-related-posts-by-tags";
import { searchPosts } from "./application/search-posts";
// @Domain
import { PostRepository } from "./domain/post-repository";
export type { Post } from "./domain/post";
export type { PostMapper } from "./domain/post-mapper";
export type { PostRepository } from "./domain/post-repository";

export const storyblokPostMapper = new StoryblokPostMapper();
export const storyblokPostRepository = new StoryblokPostRepository(
  storyblokPostMapper
);
export const postsModule = createModuleWithUseCases(storyblokPostRepository);

function createModuleWithUseCases(repo: PostRepository) {
  return {
    getAllPosts: getAllPosts(repo),
    getPostBySlug: getPostBySlug(repo),
    getPostsByTag: getPostsByTag(repo),
    getRelatedPostsByTags: getRelatedPostsByTags(repo),
    searchPosts: searchPosts(repo),
  };
}
