import './reset.css'
import './App.css'

import Start from './components/Start/Start'
import ListContainer from './components/List/ListContainer'

import { BrowserRouter, Routes, Route } from 'react-router';

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/List" element={<ListContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
