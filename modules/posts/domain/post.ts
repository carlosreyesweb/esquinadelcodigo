type PostImage = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export interface Post {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  teaser: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  cover: PostImage;
  ogImage: PostImage;
}
