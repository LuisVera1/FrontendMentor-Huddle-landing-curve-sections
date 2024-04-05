import './App.css'
import { Features } from './components/Features/Features'
import { MainSection } from './components/MainSection/MainSection'
import { Nav } from './components/Nav/Nav'
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


      <section>
        <h4>  Ready To Build Your Community?</h4>
        <a href="">  Get Started For Free</a>
      </section>


      <footer>

      </footer>




      {/* 

  











  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
  vestibulum a, ultrices quis sem.
  
  Phone: +1-543-123-4567
  example@huddle.com

  Newsletter
  To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
  send you spam or pass on your email address

  Subscribe
      
      
      
      
      */}

    </>
  )
}

export default App
