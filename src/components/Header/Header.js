
import NavBar from './NavBar'
import Logo from './Logo'
import IconMenu from './IconMenu'
import './Header.scss'


const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper-nav'> 
        <div className='navBar'>
            <Logo />
            <NavBar />
            <IconMenu />
        </div>
      </div>
      

    </header>
  )
}

export default Header