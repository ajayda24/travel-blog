import Category from './category'

export default function Categories() {
  return (
    <div>
      <div className='flex  flex-wrap gap-2 my-5 mx-2 justify-center'>
        <Category name='Solo' image='https://picsum.photos/id/27/200/300' />
        <Category name='Family' image='https://picsum.photos/id/441/200/300' />
        <Category
          name='Adventure'
          image='https://picsum.photos/id/177/200/300'
        />
        <Category
          name='Romantic'
          image='https://picsum.photos/id/129/200/300'
        />
        <Category
          name='Friends'
          image='https://picsum.photos/id/209/200/300'
        />
        <Category name='Budjet' image='https://picsum.photos/id/230/200/300' />
      </div>
      <div className='flex justify-center items-center mx-6 py-3 rounded-md bg-white bg-opacity-[0.15] shadow-2xl text-white backdrop-blur-md'>
        Trending Travels
      </div>
    </div>
  )
}
