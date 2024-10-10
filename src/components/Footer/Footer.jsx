import { useState } from 'react';
import { Facebook } from '../icons/facebook';
import { Twitter } from '../icons/Twitter';
import './footer.css'

export const Footer = () => {
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(inputValue);

    if (isValid) {
      setError(false);
      setInputValue('')
    } else {
      setError(true)
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <footer role="Footer" >

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
            <Facebook />
            <img src="./instagram.svg" alt="instagram" />
            <Twitter />
          </div>
        </div>

        {/* column #2 */}
        <div className='footer__secondColumn'>

          <h3 className='footer__newsletterTitle'>Newsletter</h3>
          <p className='footer__newsletterText'>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
            send you spam or pass on your email address</p>

          <form className='footer__form'>
            <div>
              <input className={error ? 'footer__input--error' : 'footer__input'} type="text" value={inputValue} onChange={handleChange} />
              {error == true && <p className='footer__input--message'>check your email please</p>}
              {error == false && <p className='footer__input--messageOk'>You are now subscribed, thank you!</p>}
            </div>
            <button className='footer__btn' onClick={(e) => handleSubmit(e)}>Subscribe</button>
          </form>

        </div>
      </div>
    </footer>
  )
}