import {useRouter} from 'next/router'

import SinglePost from '../../components/Blog/single-post'

export default function ExplorePlaces(){
  const router = useRouter()
  console.log(router.query);
  return <SinglePost imgUrl='https://picsum.photos/200/300' imgName='Place 1' />
}