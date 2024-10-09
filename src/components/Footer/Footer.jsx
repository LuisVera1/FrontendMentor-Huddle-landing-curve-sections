import { Facebook } from '../icons/facebook';
import './footer.css'

export const Footer = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('validating email')
  }

  return (
    <footer >

      <img className="footer__wave" src="./bg-footer-top-desktop.svg" alt="wave" />

      {/* container */}
      <div className='footer-section'>

        {/* column #1 */}
        <div className='footer__firstColumn'>

          <img className='footer__logo--white' src="./logo.svg" alt="huddle" />

          <p className='footer__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia
            vestibulum a, ultrices quis sem.</p>

          <ul className='footer__list'>
            <li>
              <img src="./icon-phone.svg" alt="phone" />
              <p>Phone: +1-543-123-4567</p>

            </li>
            <li>
              <img src="./icon-email.svg" alt="phone" />
              <p>example@huddle.com</p>
            </li>
          </ul>

          <div className='footer__icons'>
            {/* <img className='icons__fb' src="./facebook.svg" alt="facebook" /> */}
            <Facebook  className="icon-fb"/>
          
            <img src="./instagram.svg" alt="instagram" />
            <img src="./twitter.svg" alt="twitter" />
          </div>
        </div>

        {/* column #2 */}
        <div className='footer__secondColumn'>

          <h3 className='footer__newsletterTitle'>Newsletter</h3>
          <p className='footer__newsletterText'>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
            send you spam or pass on your email address</p>

          <form className='footer__form'>
            <div>
              <input className='footer__input' type="text" />
              <p className='footer__input--message'>check your email please</p>
            </div>
            <button className='footer__btn' onClick={(e) => handleSubmit(e)}>Subscribe</button>
          </form>

        </div>
      </div>
    </footer>
  )
}