import { serverEnvironment } from "@/environment";
import StoryblokClient from "storyblok-js-client";
import { PostMapper } from "../domain/post-mapper";
import { PostRepository } from "../domain/post-repository";

enum VERSION {
  "development" = "draft",
  "production" = "published",
  "test" = "draft",
}

export class StoryblokPostRepository implements PostRepository {
  private client = new StoryblokClient({
    accessToken: serverEnvironment.storyblokToken,
    region: "us",
  });
  private version = VERSION[process.env.NODE_ENV];

  constructor(private readonly mapper: PostMapper) {}

  async index() {
    const { data } = await this.client.get("cdn/stories", {
      starts_with: "posts/",
      sort_by: "created_at:desc",
      version: this.version,
    });
    const posts = this.mapper.toPostsArray(data.stories);
    return posts;
  }

  async getBySlug(slug: string) {
    const { data } = await this.client.get(`cdn/stories/posts/${slug}`, {
      version: this.version,
    });
    const post = this.mapper.toPost(data.story);
    return post;
  }

  async getByTag(tag: string) {
    const { data } = await this.client.get("cdn/stories", {
      starts_with: "posts/",
      sort_by: "created_at:desc",
      with_tag: tag,
      version: this.version,
    });
    const results = this.mapper.toPostsArray(data.stories);
    return results;
  }

  async search(term: string) {
    const { data } = await this.client.get("cdn/stories", {
      starts_with: "posts/",
      sort_by: "created_at:desc",
      search_term: term,
      version: this.version,
    });
    const results = this.mapper.toPostsArray(data.stories);
    return results;
  }

  async getRelatedByTags(tags: string[], excludingSlug: string) {
    const MAX_RELATED_POSTS = 2;
    const { data } = await this.client.get("cdn/stories", {
      starts_with: "posts/",
      sort_by: "created_at:desc",
      with_tag: tags.join(","),
      excluding_slugs: `posts/${excludingSlug}`,
      per_page: MAX_RELATED_POSTS,
      version: this.version,
    });
    const relatedPosts = this.mapper.toPostsArray(data.stories);
    return relatedPosts;
  }
}
