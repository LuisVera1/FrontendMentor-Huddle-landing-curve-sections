import { BtnGetStarted } from '../BtnGetStarted/BtnGetStarted'
import './readySection.css'

export const ReadySection = () => {
  return (
    <section role="Start now" className='ready__section'>
      <h4 className='ready__title'>  Ready To Build Your Community?</h4>

      <BtnGetStarted />
    </section >
  )
}