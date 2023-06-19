import { PostComment } from './post-comment'
import type Comment from '../interfaces/comment'

type Props = {
  comments: Comment[]
}

const ListComment = ({ comments }: Props) => {
  return (
    <div className='space-y-4 flex-col'>
      <h3 className='mb-8 text-3xl font-bold tracking-tighter leading-tight md:leading-none  md:text-left'>
        Comments
      </h3>
      {comments.map((comment) => (
        <PostComment
          key={comment.commentator.name}
          commentator={comment.commentator}
          comment={comment.text}
          isOmitted={false}
        />
      ))}
    </div>
  )
}

export default ListComment
