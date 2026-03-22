import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/sections/About'

const SECTIONS: Record<string, ComponentType> = {
  '#home':         Home,
  '#about':        About,
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

  const Section = SECTIONS[active]

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Section key={active} />
      </main>
      <Footer />
    </>
  )
}

export default App
