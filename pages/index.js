import Header from '../components/Header'
import Categories from '../components/Categories'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Blog limit={5} />
      <Footer />
    </>
  )
}
