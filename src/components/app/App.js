import { Areas } from '../Areas'
import { Description } from '../Description'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Main } from '../Main'
import { Rules } from '../Rules'

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Description />
      <Areas />
      <Rules/>
      <Footer />
    </>
  )
}
