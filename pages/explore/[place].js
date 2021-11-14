import { useRouter } from 'next/router'

import SinglePost from '../../components/Blog/single-post'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function ExplorePlaces() {
  const router = useRouter()
  console.log(router.query)
  return (
    <>
      <Header />
      <SinglePost
        imgUrl='https://picsum.photos/200/300'
        imgName='Wonderful Place'
        place='Kannur, Kerala'
        cost='15000'
        emoji_like='4'
        emoji_comment='7'
        emoji_love='2'
        emoji_satisfied='3'
        description='fqwfqi ifqf iqfniq qihqndfqi qdiqdiqd qdniqdniqdq diqndqdqd qdinqidnqid qdiqndqd dniqndiqq iqhdqdq dbfiq iqif fkqfiqbiff fiqiqbf qkhqfbqf qfbebfif qfbfiqbfqbf qifbibqf qiqbfqif qfiqfiq fqi fqwfqi ifqf iqfniq qihqndfqi qdiqdiqd qdniqdniqdq diqndqdqd qdinqidnqid qdiqndqd dniqndiqq iqhdqdq dbfiq iqif fkqfiqbiff fiqiqbf qkhqfbqf qfbebfif qfbfiqbfqbf qifbibqf qiqbfqif qfiqfiq fqi fqwfqi ifqf iqfniq qihqndfqi qdiqdiqd qdniqdniqdq diqndqdqd qdinqidnqid qdiqndqd dniqndiqq iqhdqdq dbfiq iqif fkqfiqbiff fiqiqbf qkhqfbqf qfbebfif qfbfiqbfqbf qifbibqf qiqbfqif qfiqfiq fqi'
      />
      <Footer />
    </>
  )
}
