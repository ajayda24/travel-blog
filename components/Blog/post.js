import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment'


export default function BlogPost(props) {
  return (
    <div className='rounded-md bg-white bg-opacity-[0.15] shadow-2xl text-white backdrop-blur-sm w-full sm:w-max  min-w-[10rem] min-h-[10rem] flex flex-col justify-between p-4'>
      <img src={props.imgUrl} alt={props.imgName} />
      <h3 className='text-center my-3'>{props.imgName}</h3>
      <div className='flex justify-around items-center'>
        <div className='flex gap-2'>
          <CommentIcon />
          <p>{props.comment}</p>
        </div>
        <div className='flex gap-4'>
          <FavoriteIcon /> <p>{props.love}</p>
        </div>
      </div>
    </div>
  )
}
