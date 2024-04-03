import './App.css'
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

        <article>
          <h3> Grow Together</h3>
          <p>  Generate meaningful discussions with your audience and build a strong, loyal community.
            Think of the insightful conversations you miss out on with a feedback form. </p>
        </article>

        <article>
          <h3>  Flowing Conversations          </h3>
          <p>  You wouldn't paginate a conversation in real life, so why do it online? Our threads have
            just-in-time loading for a more natural flow.</p>
        </article>

        <article>
          <h3>  Your Users
          </h3>
          <p>  It takes no time at all to integrate Huddle with your app's authentication solution. This means,
            once signed in to your app, your users can start chatting immediately.</p>
        </article>

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
