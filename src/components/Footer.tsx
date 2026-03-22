import MeetupIcon, { MEETUP_URL } from './MeetupIcon'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Team', href: '#team' },
  { label: 'Contributors', href: '#contributors' },
  { label: 'Join Us', href: '#join' },
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 overflow-hidden">

      {/* Subtle purple glow */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#5a0067] opacity-[0.12] blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-14 pb-8">

        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-4">
              <img src="/aws-logo-logo.png" alt="AWS" className="h-7 w-auto object-contain brightness-0 invert" />
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-semibold tracking-wide text-white">Cloud Club</span>
                <span className="text-[13px] font-bold tracking-widest text-[#c084fc] uppercase">UNISA</span>
              </div>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              A student-led AWS Cloud Club at the University of South Africa, open to everyone passionate about the cloud.
            </p>

            {/* Meetup */}
            <a
              href={MEETUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c084fc] hover:text-white transition-colors duration-200"
            >
              <MeetupIcon size={18} />
              Find us on Meetup
            </a>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">Get in Touch</p>
            <a
              href="mailto:awscloudclubunisa@gmail.com"
              className="inline-flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-150 group"
            >
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#c084fc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              awscloudclubunisa@gmail.com
            </a>

            <div className="mt-6">
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-3">Powered by</p>
              <div className="flex items-center gap-2">
                <img src="/aws-logo-logo.png" alt="AWS" className="h-5 w-auto object-contain brightness-0 invert opacity-50" />
                <span className="text-xs text-gray-500">Amazon Web Services</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} AWS Cloud Club @ Unisa. All rights reserved.</p>
          <p className="text-gray-700">Student-led · Cloud-powered · Open to all</p>
        </div>

      </div>
    </footer>
  )
}
