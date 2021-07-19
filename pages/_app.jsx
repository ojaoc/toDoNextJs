import '../styles/globals.sass'
import { container } from 'styles/App.module.sass'

function MyApp({ Component, pageProps }) {
  return (
    <div className={container}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
