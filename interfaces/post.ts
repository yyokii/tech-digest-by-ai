import type Comment from './comment'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  ogImage: {
    url: string
  }
  content: string
  comments: Comment[]
}

export default PostType
