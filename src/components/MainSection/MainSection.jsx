import { BtnGetStarted } from '../BtnGetStarted/BtnGetStarted'
import './mainSection.css'

export const MainSection = () => {

  return (
    <>
      <div className='main__title-section'>
        <h1 className='main__title'>Build The Community Your Fans Will Love</h1>
      </div>

      <div className='main__description-section'>
        <p className='main__description'>
          Huddle re-imagines the way we build communities. You have a voice, but so does
          your audience. Create connections with your users as you engage in genuine discussion.
        </p>
      </div>

      <div className="get-started__section">
        <BtnGetStarted />
      </div>

      <img className='main__img-hero' width="1016px" height="720px" src="/screen-mockups.svg" alt="devices" />
    </>
  )
}