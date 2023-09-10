import { BrowserRouter } from 'react-router-dom'
import RouterIndex from './routes/RouterIndex.jsx'
import './App.css'
import Navbar from './components/navbar'
import Peliculas from "./pages/Peliculas"
import Series from "./pages/Series"

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
