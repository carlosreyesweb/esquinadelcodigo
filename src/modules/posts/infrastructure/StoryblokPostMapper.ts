import { ISbStoryData } from 'storyblok-js-client'
import { Post } from '../domain/Post'
import { PostMapper } from '../domain/PostMapper'

export class StoryblokPostMapper implements PostMapper {
  flattenPost(story: ISbStoryData) {
    const {
      uuid: id,
      name: title,
      slug,
      tag_list: tags,
      created_at: createdAt,
      published_at: updatedAt,
      content: { ogImage, cover, teaser, content },
    } = story

    const [coverWidth, coverHeight] = this.getImageDimensions(cover.filename)
    const [ogImageWidth, ogImageHeight] = this.getImageDimensions(
      ogImage.filename
    )

    const post: Post = {
      id,
      title,
      slug,
      tags,
      createdAt,
      cover: {
        id: cover.id,
        src: cover.filename,
        alt: cover.alt,
        width: coverWidth,
        height: coverHeight,
      },
      ogImage: {
        id: ogImage.id,
        src: ogImage.filename,
        alt: ogImage.alt,
        width: ogImageWidth,
        height: ogImageHeight,
      },
      teaser,
      content,
      updatedAt: updatedAt || createdAt,
    }
    return post
  }

  makePostsArray(stories: ISbStoryData[]) {
    const posts = stories.map((story) => this.flattenPost(story))
    return posts
  }

  private getImageDimensions(filename: string) {
    const dimensions = filename.split('/')[5].split('x')
    const numericDimensions = dimensions.map((dimension) => parseInt(dimension))
    return numericDimensions as [number, number]
  }
}
