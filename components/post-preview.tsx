import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { PostComment } from './post-comment'
import Commentator from '../interfaces/commentator'

type Props = {
  title: string
  site: string
  coverImage: string
  date: string
  slug: string
  firstComment: string
  firstCommentator: Commentator
}

const PostPreview = ({
  title,
  site,
  coverImage,
  date,
  slug,
  firstComment,
  firstCommentator,
}: Props) => {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]' className='hover:underline'>
          {title}
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <span>{site} / </span>
        <DateFormatter dateString={date} />
      </div>
      {/* 最初のコメントを表示 */}
      <Link as={`/posts/${slug}`} href='/posts/[slug]' className='hover:underline'>
        <PostComment commentator={firstCommentator} comment={firstComment} isOmitted={true} />
      </Link>
      <div className='text-lg mb-4'></div>
    </div>
  )
}

export default PostPreview
