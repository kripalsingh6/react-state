import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'
import LikeButton from './LikeButton'
import Ludo from './Ludo'
import Tudo from './Tudo'
import Lottery from './lottery'
import './App.css';
import CommentForm from './commentForm'
import Comment from './comment'
import Counters from './counters'
import Joker from './joker'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Joker/>
    </>
  )
}

export default App
