import '../tailwind.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Travel Blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
