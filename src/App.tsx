import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'

const SECTIONS: Record<string, JSX.Element> = {
  '#home':         <Home />,
  '#about':        <About />,
}

function getHash() {
  const h = window.location.hash
  return h && h in SECTIONS ? h : '#home'
}

function App() {
  const [active, setActive] = useState(getHash)

  useEffect(() => {
    const onHashChange = () => {
      const h = getHash()
      setActive(h)
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {SECTIONS[active]}
      </main>
    </>
  )
}

export default App
