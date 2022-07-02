import { NavLink } from "react-router-dom"
import './Header.scss'
const NavBar = () => {
  return (
    <nav> 
    <div className='wrapper-link'><NavLink className='link' exact='true' to='#'>MODELOS</NavLink></div>
    <div className='wrapper-link'><NavLink className='link' exact='true' to='#'>PRUEBA DE MANEJO</NavLink></div>
    <div className='wrapper-link'><NavLink className='link' exact='true' to='/'>COTIZAR</NavLink></div>
    <div className='wrapper-link'><NavLink className='link' exact='true' to='#'>PROMOCIONES</NavLink></div>
    <div className='wrapper-link'><NavLink className='link' exact='true' to='#'>DISTRIBUIDORES</NavLink></div>
    </nav>
  )
}

export default NavBar