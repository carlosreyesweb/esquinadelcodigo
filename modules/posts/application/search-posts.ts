import { PostRepository } from "../domain/post-repository";

export function searchPosts(repo: PostRepository) {
  return async (query: string) => {
    const posts = await repo.search(query);
    return posts;
  };
}
