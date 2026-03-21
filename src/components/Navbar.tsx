import { useEffect, useState } from 'react'
import awsLogo from '/aws-logo-logo.png'

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

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href: string) => {
    setActiveHash(href)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_2px_20px_rgba(90,0,103,0.10)] border-b border-[#5a0067]/10'
          : 'border-b border-gray-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="AWS Cloud Club UNISA – Home"
          >
            <img
              src={awsLogo}
              alt="AWS"
              className="h-7 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-semibold tracking-wide text-gray-800">
                Cloud Club
              </span>
              <span className="text-[13px] font-bold tracking-widest text-[#5a0067] uppercase">
                UNISA
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                    activeHash === href
                      ? 'text-[#5a0067]'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  aria-current={activeHash === href ? 'page' : undefined}
                >
                  {label}
                  {/* Active underline indicator */}
                  {activeHash === href && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-[#5a0067]" />
                  )}
                </a>
              </li>
            ))}

            {/* Join Us CTA */}
            <li className="ml-3">
              <a
                href="#join"
                onClick={() => handleNavClick('#join')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-150 ${
                  activeHash === '#join'
                    ? 'bg-[#3d0047] text-white shadow-md'
                    : 'bg-[#5a0067] text-white hover:bg-[#6e0080] shadow-sm hover:shadow-md'
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
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-[#5a0067] hover:bg-[#5a0067]/5 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-gray-100 py-3 animate-[fadeIn_0.15s_ease]"
          >
            <ul role="list" className="flex flex-col gap-0.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => handleNavClick(href)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                      activeHash === href
                        ? 'text-[#5a0067] bg-[#5a0067]/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    aria-current={activeHash === href ? 'page' : undefined}
                  >
                    {activeHash === href && (
                      <span className="w-1 h-4 rounded-full bg-[#5a0067] shrink-0" />
                    )}
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2 px-4">
                <a
                  href="#join"
                  onClick={() => handleNavClick('#join')}
                  className="block w-full py-2.5 rounded-full text-sm font-semibold text-center text-white bg-[#5a0067] hover:bg-[#6e0080] transition-colors"
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
