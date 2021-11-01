import Blog from '../../components/Blog'
import Footer from '../../components/Footer'
import Header from '../../components/Header'



export default function Explore() {
  return (
    <>
      <Header />

      <Blog limit={15} />
      <Footer />
    </>
  )
}
