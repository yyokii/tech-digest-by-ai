import { PostComment } from './post-comment'
import type Comment from '../interfaces/comment'

type Props = {
  comments: Comment[]
}

const ListComment = ({ comments }: Props) => {
  return (
    <div className='space-y-2 flex-col items-center'>
      <h3 className='mb-8 text-3xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left'>
        Comments
      </h3>
      {comments.map((comment) => (
        <PostComment
          key={comment.commentator.name}
          commentator={comment.commentator}
          comment={comment.text}
          isOmitted={true}
        />
      ))}
    </div>
  )
}

export default ListComment
