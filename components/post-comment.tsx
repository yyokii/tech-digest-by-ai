import Commentator from '../interfaces/commentator'

interface PostCommentProps {
  commentator: Commentator
  comment: string
  isOmitted: boolean
}

export const PostComment: React.FC<PostCommentProps> = (props) => {
  return (
    <div className='space-y-2 flex flex-col items-start'>
      <div className='space-x-4 flex items-center'>
        <img
          className='rounded-full w-10 h-10'
          src={`https://api.dicebear.com/6.x/micah/svg?seed=${props.commentator.title}${props.commentator.age}${props.commentator.sex}`}
          alt={`Avatar of ${props.commentator.name}`}
        />
        <p className='font-bold'>{props.commentator.name}</p>
        <p className='text-gray-500'>
          ({props.commentator.title}, {props.commentator.age}歳, {props.commentator.sex})
        </p>
      </div>
      {props.isOmitted ? <p className='line-clamp-2'>{props.comment}</p> : <p>{props.comment}</p>}
    </div>
  )
}
