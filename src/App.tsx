import Navbar from './components/Navbar'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'events', label: 'Events' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'team', label: 'Team' },
  { id: 'contributors', label: 'Contributors' },
  { id: 'join', label: 'Join Us' },
]

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {SECTIONS.map(({ id, label }) => (
          <section
            key={id}
            id={id}
            className="min-h-screen flex items-center justify-center border-b border-gray-100"
          >
            <h1 className="text-4xl font-bold text-gray-800">{label}</h1>
          </section>
        ))}
      </main>
    </>
  )
}

export default App
