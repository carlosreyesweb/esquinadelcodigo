import { Post } from "./post";

export interface PostMapper {
  toPost(data: unknown): Post;
  toPostsArray(data: unknown[]): Post[];
}
