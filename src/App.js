import React from 'react'
import Combo from './Combo.js'
import Login from './Login.js'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Combo/>}/>
        <Route path='login/sign_in' element={<Login/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
