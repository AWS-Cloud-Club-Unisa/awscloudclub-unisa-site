import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Team', href: '#team' },
  { label: 'Contributors', href: '#contributors' },
] as const

export default function Navbar() {
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#home')
    const onScroll = () => setScrolled(window.scrollY > 8)

    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href: string) => {
    setActiveHash(href)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : ''
      } bg-white border-b border-gray-100`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 shrink-0"
            aria-label="AWS Cloud Club UNISA - Home"
          >
            {/* AWS-style hexagon icon */}
            <span className="flex items-center justify-center w-8 h-8 rounded bg-[#FF9900] text-white font-bold text-sm select-none">
              AWS
            </span>
            <span className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">
              Cloud Club{' '}
              <span className="text-[#FF9900]">UNISA</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                    activeHash === href
                      ? 'text-[#FF9900] bg-orange-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  aria-current={activeHash === href ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* Join Us CTA */}
            <li>
              <a
                href="#join"
                onClick={() => handleNavClick('#join')}
                className={`ml-2 px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
                  activeHash === '#join'
                    ? 'bg-orange-600 text-white'
                    : 'bg-[#FF9900] text-white hover:bg-orange-500'
                }`}
                aria-current={activeHash === '#join' ? 'page' : undefined}
              >
                Join Us
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            {menuOpen ? (
              /* X icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-100 py-2">
            <ul role="list" className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => handleNavClick(href)}
                    className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                      activeHash === href
                        ? 'text-[#FF9900] bg-orange-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    aria-current={activeHash === href ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-1 pb-1">
                <a
                  href="#join"
                  onClick={() => handleNavClick('#join')}
                  className={`block mx-4 px-4 py-2.5 rounded-md text-sm font-semibold text-center transition-colors duration-150 ${
                    activeHash === '#join'
                      ? 'bg-orange-600 text-white'
                      : 'bg-[#FF9900] text-white hover:bg-orange-500'
                  }`}
                  aria-current={activeHash === '#join' ? 'page' : undefined}
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
