
import './App.css'
import { useEffect , useState } from 'react'
import {Routes , Route} from 'react-router-dom' 
import Liste from './Liste'
import Detail from './detail'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Liste/>} />
      <Route path="/detail" element={<Detail/>} />
    </Routes>
  )
}

export default App
