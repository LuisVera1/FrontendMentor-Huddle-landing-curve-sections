import './statistics.css'

export const Statistics = () => {

  return (
    <section role="Statistics section">
      <div className='statistics-section'>

        <div className='statistics__block'>
          <img className="statistics__icon" src="/icon-communities.svg" width="56" height="56" alt="1.4k communities" />
          <h2 className='statistics__number'> 1.4k+</h2>
          <p className='statistics__text'>Communities Formed</p>
        </div>

        <div className='statistics__block'>
          <img className="statistics__icon" src="/icon-messages.svg" width="56" height="56" alt="2.7m messages" />
          <h2 className='statistics__number'>2.7m+</h2>
          <p className='statistics__text'>Messages Sent</p>
        </div>

      </div>
    </section>
  )
}