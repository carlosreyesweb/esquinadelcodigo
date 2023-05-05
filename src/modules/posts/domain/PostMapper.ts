import { Post } from './Post'

export interface PostMapper {
  flattenPost(data: any): Post
  makePostsArray(data: any[]): Post[]
}
