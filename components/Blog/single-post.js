import FavoriteIcon from '@mui/icons-material/Favorite'
// import CommentIcon from '@mui/icons-material/Comment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'

// import InputIcon from '@material-tailwind/react/InputIcon'

export default function SinglePost(props) {
  const {
    imgUrl,
    imgName,
    place,
    description,
    cost,
    emoji_like,
    emoji_comment,
    emoji_love,
    emoji_satisfied,
    images,
  } = props
  return (
    <div className='p-3 mb-14'>
      <div className='rounded-md bg-white bg-opacity-[0.15] shadow-2xl text-white backdrop-blur-sm w-full   min-w-[10rem] min-h-[10rem] flex flex-col justify-between p-4'>
        <div className='flex flex-col sm:flex-row my-3'>
          <div className='flex-1 flex justify-center items-center'>
            <img
              src={imgUrl}
              alt={imgName}
              className='sm:w-60 ring-4 ring-gray-50'
            />
          </div>
          <div className='flex-1'>
            <h3 className='text-center my-3'>{imgName}</h3>
            <h4 className='my-3'>{place}</h4>
            <p className='my-3 text-left'>{description}</p>
            <p className='my-3'>Total Cost : {cost} (approx.)</p>
            <div className='flex justify-around mt-4'>
              <div className='flex gap-4'>
                <p className='text-lg'>{emoji_like}</p>
                <p>
                  <ThumbUpIcon />
                </p>
              </div>
              <div className='flex gap-4'>
                <p className='text-lg'>{emoji_love}</p>
                <p>
                  <FavoriteIcon />
                </p>
              </div>
              <div className='flex gap-4'>
                <p className='text-lg'>{emoji_satisfied}</p>
                <p>
                  <SentimentSatisfiedAltIcon />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-4 rounded-md p-2 m-2 justify-center  bg-white bg-opacity-[0.15] drop-shadow-2xl text-white'>
          Gallery
        </div>
        <div className='rounded-md bg-white bg-opacity-[0.15] shadow-2xl text-white flex gap-4 overflow-x-scroll sm:overflow-x-auto sm:flex-wrap p-3 m-2'>
          <img
            className='ring-2 ring-white'
            src='https://picsum.photos/200/300'
            alt=''
          />
          <img
            className='ring-2 ring-white'
            src='https://picsum.photos/300/200'
            alt=''
          />
          <img
            className='ring-2 ring-white'
            src='https://picsum.photos/200/300'
            alt=''
          />
          <img
            className='ring-2 ring-white'
            src='https://picsum.photos/300/200'
            alt=''
          />
        </div>
        {/* <div className='flex gap-4 rounded-md p-2 m-2 justify-center  bg-white bg-opacity-[0.15] drop-shadow-2xl text-white'>
          <p>
            Comments <CommentIcon />
          </p>
          <p>{emoji_comment}</p>
        </div>
        <div className='flex mt-4 mx-auto sm:w-96 text-white'>
          <InputIcon
            type='text'
            color='gray'
            size='lg'
            outline={false}
            placeholder='Comment your thoughts'
            style={{ color: 'white' }}
            iconFamily='material-icons'
            iconName='send'
            multiline
          />
        </div> */}
      </div>
    </div>
  )
}


