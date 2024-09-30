import './App.css'
import { Features } from './components/Features/Features'
import { Footer } from './components/Footer/Footer'
import { MainSection } from './components/MainSection/MainSection'
import { Nav } from './components/Nav/Nav'
import { ReadySection } from './components/ReadySection/ReadySection'
import { Statistics } from './components/Statistics/Statistics'

function App() {

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <MainSection />
      </main>

      <section>
        <Statistics />
      </section>

      <section>
        <Features />
      </section>

      <ReadySection />

      <Footer />
    </>
  )
}

export default App
