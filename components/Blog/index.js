
import BlogPost from './post'

export default function Blog(props) {
  return (
    <>
      <main className=' pb-16'>
        <div className='flex flex-wrap justify-around flex-col sm:flex-row gap-4 p-4'>
          <BlogPost
            placeName='Travel 1'
            imgUrl='https://picsum.photos/200/300'
            comment='5'
            emoji_love='7'
            emoji_like='3'
            emoji_satisfied='6'
          />
          <BlogPost
            placeName='Travel 2'
            imgUrl='https://picsum.photos/300/200'
            comment='2'
            emoji_love='4'
            emoji_like='3'
            emoji_satisfied='6'
          />
        </div>
        <div className='flex justify-center items-center mx-7 py-3 rounded-md bg-white bg-opacity-[0.15] shadow-2xl text-white backdrop-blur-sm'>
          View More
        </div>
      </main>
    </>
  )
}
