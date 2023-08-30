import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import MovieDetails from '../pages/MovieDetails.jsx'

const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
      {/* <Route path='*' element={} /> */}
    </Routes>
  )
}

export default RouterIndex
