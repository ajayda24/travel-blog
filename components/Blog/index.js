
import BlogPost from './post'

export default function Blog() {
  return (
    <>
      <main className=' pb-16'>
        <div className='flex flex-wrap justify-around flex-col sm:flex-row gap-4 p-4'>
          <BlogPost
            imgName='Travel 1'
            imgUrl='https://picsum.photos/200/300'
            comment='5'
            love='7'
          />
          <BlogPost
            imgName='Travel 2'
            imgUrl='https://picsum.photos/300/200'
            comment='2'
            love='4'
          />
        </div>
        <div className='flex justify-center items-center mx-7 py-3 rounded-md bg-white bg-opacity-[0.15] shadow-2xl text-white backdrop-blur-sm'>
          View More
        </div>
      </main>
    </>
  )
}
