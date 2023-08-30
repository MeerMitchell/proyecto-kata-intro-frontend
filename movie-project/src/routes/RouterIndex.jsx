import { Routes, Route } from 'react-router-dom'

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
