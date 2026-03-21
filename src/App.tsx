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
        {SECTIONS.map(({ id, label }, i) => (
          <section
            key={id}
            id={id}
            className={`min-h-screen flex flex-col items-center justify-center gap-4 ${
              i % 2 === 0 ? 'bg-white' : 'bg-[#5a0067]/[0.03]'
            }`}
          >
            <span className="w-10 h-1 rounded-full bg-[#5a0067]" />
            <h2 className="text-4xl font-bold text-gray-900">{label}</h2>
            <p className="text-gray-400 text-sm tracking-wide uppercase">Section content coming soon</p>
          </section>
        ))}
      </main>
    </>
  )
}

export default App
