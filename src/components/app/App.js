import { Areas } from '../Areas'
import { Description } from '../Description'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { History } from '../History'
import { Main } from '../Main'

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <History />
      <Areas />
      <Description />
      <Footer />
    </>
  )
}
