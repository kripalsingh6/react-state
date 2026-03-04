import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'
import LikeButton from './LikeButton'
import Ludo from './Ludo'
import Tudo from './Tudo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tudo/>
    </>
  )
}

export default App
