import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <a className='navbar-brand' href='/'>Pokedex</a>

      <ul>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/About'>About</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/'>Películas</NavLink>
        </li>
        <li className='nav-item px-2'>
        <NavLink className='nav-link' to='/'>Series de TV</NavLink>
        </li>
        <li className='nav-item px-2'>
        <NavLink className='nav-link' to='/'>Programas de TV</NavLink>
        </li>
        <li className='nav-item px-2'>
        <NavLink className='nav-link' to='/'>TOP imdb</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
