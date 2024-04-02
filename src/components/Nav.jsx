import './nav.css'

export const Nav = () => {

  return (
    <nav>
      <div className="nav-container">
        <img className='nav__logo' width="240px" height="38px" src="logo.svg" alt="Huddle" />
        <a className='nav__link' href="#">Try it free</a>
      </div>
    </nav>
  )
}