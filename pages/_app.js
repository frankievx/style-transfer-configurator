import 'tailwindcss/tailwind.css'
import './styles/tailwind.css'
import Layout from '/layouts/main.jsx'

function MyApp({ Component, pageProps }) {
  return  (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
