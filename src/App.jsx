import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
