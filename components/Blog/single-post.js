import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment'

export default function SinglePost(props) {
  return (
    <div className='p-3'>
      <div className='rounded-md bg-white bg-opacity-[0.15] shadow-2xl text-white backdrop-blur-sm w-full   min-w-[10rem] min-h-[10rem] flex flex-col justify-between p-4'>
        <img src={props.imgUrl} alt={props.imgName} />
        <h3 className='text-center my-3'>{props.imgName}</h3>
        <h4 className='text-center my-3'>{props.place}</h4>
        <p className='text-center my-3'>{props.description}</p>
        <p className='text-center my-3'>Total Cost : {props.cost} (approx.)</p>
        <div className='flex gap-4 rounded-md p-2 m-2 justify-center  bg-white bg-opacity-[0.15] drop-shadow-2xl text-white'>
          <p>
            I Love this Place <FavoriteIcon />
          </p>
          <p>{props.love}</p>
        </div>
        <div className='rounded-md bg-white bg-opacity-[0.15] shadow-2xl text-white flex gap-4 overflow-x-scroll p-3 m-2'>
          <img className='ring-2 ring-white' src='https://picsum.photos/200/300' alt='' />
          <img className='ring-2 ring-white' src='https://picsum.photos/300/200' alt='' />
          <img className='ring-2 ring-white' src='https://picsum.photos/200/300' alt='' />
          <img className='ring-2 ring-white' src='https://picsum.photos/300/200' alt='' />
        </div>
        <div className='flex gap-4 rounded-md p-2 m-2 justify-center  bg-white bg-opacity-[0.15] drop-shadow-2xl text-white'>
          <p>
            Comments <CommentIcon />
          </p>
          <p>{props.comment}</p>
        </div>
        
      </div>
    </div>
  )
}
