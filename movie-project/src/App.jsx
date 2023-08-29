import { BrowserRouter } from 'react-router-dom'
import RouterIndex from './routes/RouterIndex.jsx'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter>
    </>
  )
}

export default App
