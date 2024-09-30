import './footer.css'

export const Footer = () => {
  return (
    <footer >

      <img className="footer__wave" src="./bg-footer-top-desktop.svg" alt="wave" />

      <div className='footer-section'>


        <div>

          <img src="./logo.svg" alt="huddle" />

          <p className='footer__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia
            vestibulum a, ultrices quis sem.</p>

          <ul>
            <li>
              <img src="./icon-phone.svg" alt="phone" />
              <p>Phone: +1-543-123-4567</p>

            </li>
            <li>
              <img src="./icon-email.svg" alt="phone" />
              <p>example@huddle.com</p>
            </li>
          </ul>

          <div>
            <img src="./facebook.svg" alt="facebook" />
            <img src="./instagram.svg" alt="instagram" />
            <img src="./twitter.svg" alt="twitter" />
          </div>
        </div>


        <div>

          <h3>Newsletter</h3>
          <p>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
            send you spam or pass on your email address</p>
          <button>Subscribe</button>

        </div>













      </div>
    </footer>
  )
}