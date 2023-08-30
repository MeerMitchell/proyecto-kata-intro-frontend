import { BrowserRouter } from 'react-router-dom'
import RouterIndex from './routes/RouterIndex.jsx'
import './App.css'
import Navbar from './components/navbar'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RouterIndex />
      </BrowserRouter>
    </>
  )
}

export default App
