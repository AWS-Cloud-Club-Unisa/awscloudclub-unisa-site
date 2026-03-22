import MeetupIcon, { MEETUP_URL } from '../MeetupIcon'

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">

      {/* ── Animated background orbs ─────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb-1 absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#5a0067] opacity-[0.13] blur-[90px]" />
        <div className="orb-2 absolute top-1/2 -right-40 w-[440px] h-[440px] rounded-full bg-[#8b00a0] opacity-[0.10] blur-[100px]" />
        <div className="orb-3 absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-[#3d0047] opacity-[0.09] blur-[80px]" />
      </div>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow pill */}
        <div className="animate-fade-in delay-100 mb-6 inline-flex items-center gap-2 rounded-full border border-[#5a0067]/20 bg-[#5a0067]/5 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5a0067] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase">
            Student · Peer-Driven · Cloud-Powered
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-200 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-gray-900">
          Welcome to{' '}
          <span className="relative inline-block">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #5a0067 0%, #9b00b5 50%, #5a0067 100%)' }}
            >
              AWS Cloud Club
            </span>
          </span>
          <br />
          <span className="text-gray-900">@ Unisa</span>
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-up delay-300 mt-6 max-w-2xl text-lg sm:text-xl text-gray-500 leading-relaxed">
          A student-focused, peer-driven community where we blend{' '}
          <span className="font-semibold text-gray-700">Content</span>,{' '}
          <span className="font-semibold text-gray-700">Community</span>, and{' '}
          <span className="font-semibold text-gray-700">Events</span> to help
          you learn the cloud .
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-400 mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={MEETUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white shadow-lg shadow-[#5a0067]/25 transition-all duration-200 hover:shadow-[#5a0067]/40 hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg, #5a0067, #8b00a0)' }}
          >
            <MeetupIcon />
            Join the Club
          </a>
          <a
            href="#about"
            className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#5a0067] bg-white border border-[#5a0067]/25 shadow-sm hover:border-[#5a0067]/50 hover:shadow-md transition-all duration-200 hover:scale-[1.03]"
          >
            Learn More
          </a>
        </div>

        {/* Scroll cue */}
        <div className="animate-fade-in delay-600 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-300">
          <span className="text-[11px] tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ── Core Focus ───────────────────────────────────────────── */}
      <div className="relative px-6 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">What we're about</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Our Core Focus</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
              Three pillars that make up everything we do at AWS Cloud Club.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
                title: 'Content',
                desc: 'Curated learning resources, workshops, and cloud certifications guidance to grow your technical knowledge.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: 'Community',
                desc: 'A welcoming space for all students, in tech and non-tech fields alike, to connect, collaborate, and grow together.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                  </svg>
                ),
                title: 'Events',
                desc: 'Hackathons, speaker sessions, cloud challenges, and networking events throughout the academic year.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[#5a0067]/8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#5a0067]/8 text-[#5a0067] group-hover:bg-[#5a0067] group-hover:text-white transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-[#5a0067] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative px-6 py-24 sm:py-32 bg-[#5a0067]/[0.03]">
      </div>
    </section>
  )
}
