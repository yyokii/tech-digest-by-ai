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
          src='https://100k-faces.glitch.me/random-image'
          alt={`Avatar of ${props.commentator.name}`}
        />
        <p className='font-medium'>{props.commentator.name}</p>
        <p>{props.commentator.age}</p>
        <p>{props.commentator.sex}</p>
      </div>
      {props.isOmitted ? <p className='line-clamp-2'>{props.comment}</p> : <p>{props.comment}</p>}
    </div>
  )
}
