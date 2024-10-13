
import Home from './screens/Home'
import Resume from './screens/Resume'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='resume' element={<Resume/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
