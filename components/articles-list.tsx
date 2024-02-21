import { Post, postsModule } from "@/modules/posts";
import { Article } from "./article";
import { Typography } from "./ui/typography";

interface ArticlesListProps {
  search?: string;
  tags?: Post["tags"];
  excludeSlug?: Post["slug"];
}
export async function ArticlesList({
  search,
  tags,
  excludeSlug,
}: ArticlesListProps) {
  let posts: Post[];
  if (search) posts = await postsModule.searchPosts(search);
  else if (tags && excludeSlug)
    posts = await postsModule.getRelatedPostsByTags(tags, excludeSlug);
  else posts = await postsModule.getAllPosts();

  return posts.length ? (
    <ul role="list" className="space-y-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Article data={post} />
        </li>
      ))}
    </ul>
  ) : (
    <Typography variant="lead" className="text-center">
      No se encontraron artículos.
    </Typography>
  );
}
