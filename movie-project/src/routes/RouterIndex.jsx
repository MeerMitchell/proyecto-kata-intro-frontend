import { Routes, Route } from 'react-router-dom'


const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/' element={} />
      <Route path='/about' element={} />
      <Route path='/movie/:title' element={} />
      <Route path='*' element={} />
    </Routes>
  )
}

export default RouterIndex
