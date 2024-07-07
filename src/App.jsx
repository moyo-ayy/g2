import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './Message'
import Password from './Password'

function App() {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <>
      <div className='App'>
        {authenticated ? <Message/> : <Password setAuthenticated={setAuthenticated}/>}
      </div>
    </>
  )
}

export default App
