import Navbar from './components/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
