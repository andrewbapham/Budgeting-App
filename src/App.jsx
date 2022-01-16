import { useState } from 'react'
import logo from './logo.svg'
import Header from './components/Header'
import Landing from './components/Landing'
import Budget from './components/Budget'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="h-screen">
        <Header />
        <Routes>
          <Route exact path='/' element={<Landing/>}></Route>
          <Route exact path='/Budget' element={<Budget/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
