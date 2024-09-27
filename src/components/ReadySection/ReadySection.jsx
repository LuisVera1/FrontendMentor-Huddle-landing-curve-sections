import { BtnGetStarted } from '../BtnGetStarted/BtnGetStarted'
import './readySection.css'

export const ReadySection = () => {
  return (
    <section className='ready__section'>
      <h4 className='ready__title'>  Ready To Build Your Community?</h4>

      <BtnGetStarted />
    </section >
  )
}