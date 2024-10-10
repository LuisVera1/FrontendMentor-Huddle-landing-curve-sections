import './features.css'

export const Features = () => {

  return (
    <>
      <section role="Features section">
        <article>
          <img className='features-top-img' src="/bg-section-top-desktop-1.svg" alt="wave" />
          <div className="features__container container-height-1">
            <div className="features__text">
              <h3 className='features__title'>Grow Together</h3>
              <p className='features__description'>Generate meaningful discussions with your audience and build a strong, loyal community.
                Think of the insightful conversations you miss out on with a feedback form.</p>
            </div>
            <img className='features__img' src="/illustration-grow-together.svg" width="517" height="423" alt="grow together" />
          </div>
          <img className='features-bottom-img' src="bg-section-bottom-desktop-1.svg" alt="wave" />
        </article>

        <article>
          <div className="features__container features__container--reverse container-height-2">
            <div className="features__text">
              <h3 className='features__title'>Flowing Conversations</h3>
              <p className='features__description'>You wouldn't paginate a conversation in real life, so why do it online? Our threads have
                just-in-time loading for a more natural flow.</p>
            </div>
            <img className='features__img' src="/illustration-flowing-conversation.svg" width="531" height="378" alt="grow together" />
          </div>
        </article>

        <article>
          <img className='features-bottom-img' src="bg-section-top-desktop-2.svg" alt="wave" />
          <div className="features__container container-height-3">
            <div className="features__text">
              <h3 className='features__title'>Your Users</h3>
              <p className='features__description'>It takes no time at all to integrate Huddle with your app's authentication solution. This means,
                once signed in to your app, your users can start chatting immediately.</p>
            </div>
            <img className='features__img' src="/illustration-your-users.svg" width="534" height="404" alt="grow together" />
          </div>
          <img className='features-bottom-img' src="bg-section-bottom-desktop-2.svg" alt="wave" />
        </article>
      </section>
    </>
  )
}