import IconButton from '@mui/material/IconButton'

export default function Categories() {
  return (
    <div className='w-[100vw]'>
      <div className='flex flex-wrap gap-4 my-5 mx-2 justify-around'>
        <div className='rounded-md bg-red-300 w-24 h-24 flex justify-center items-center'>
          Solo
        </div>
        <div className='rounded-md bg-red-300 w-24 h-24 flex justify-center items-center'>
          Family
        </div>
        <div className='rounded-md bg-red-300 w-24 h-24 flex justify-center items-center'>
          Adventure
        </div>
        <div className='rounded-md bg-red-300 w-24 h-24 flex justify-center items-center'>
          Romantic
        </div>
        <div className='rounded-md bg-red-300 w-24 h-24 flex justify-center items-center'>
          Friends
        </div>
        <div className='rounded-md bg-red-300 w-24 h-24 flex justify-center items-center'>
          Budjet
        </div>
      </div>
      <div className='flex justify-center items-center mx-3 rounded-md bg-red-300'>
        <IconButton>
          Trending Travels
        </IconButton>
      </div>
    </div>
  )
}
