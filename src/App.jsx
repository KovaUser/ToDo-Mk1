import './reset.css'
import './App.css'

import Start from './components/Start/Start'

import { BrowserRouter, Routes, Route } from 'react-router';

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Start/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
