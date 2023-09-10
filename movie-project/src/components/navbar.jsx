import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
    <NavLink to='/'>
      <img src='./assets/logo.png' width='50' />
    </NavLink>
      <ul>
        <img src="movie-project/src/assets/logo sitio.png" alt="" />
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='./About'>About</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='./Peliculas'>Películas</NavLink>
        </li>
        <li className='nav-item px-2'>
        <NavLink className='nav-link' to='./Series'>Series de TV</NavLink>
        </li>
        <li className='nav-item px-2'>
        <NavLink className='nav-link' to='/'>Programas de TV</NavLink>
        </li>
        <li className='nav-item px-2'>
        <NavLink className='nav-link' to='/'>TOP imdb</NavLink>
        </li>
      </ul>
        <div className='container'>
          <form action="">
            <h3><label for="buscador">Buscar</label></h3>
            <input type="button" id="Search"/>
          </form>
        </div>

    </nav>
  )
}
export default Navbar
