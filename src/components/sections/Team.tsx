export const MEMBERS = [
  {
    name: 'Previn Bogopa',
    role: 'Captain',
    desc: 'Providing vision and strategy for the club, managing key initiatives and keeping the team aligned.',
    initials: 'PB',
    featured: true,
    linkedin: 'https://www.linkedin.com/in/previnbogopa/',
  },
  {
    name: 'Shifra Ssebuliba',
    role: 'Social Media Lead',
    desc: 'Managing content creation across platforms, promoting events and driving member engagement online.',
    initials: 'SS',
    featured: false,
    linkedin: 'https://www.linkedin.com/in/shifra-destiny-ssebuliba/',
  },
  {
    name: 'Lesego Mothapo',
    role: 'Management Lead',
    desc: 'Overseeing planning, execution and accountability across club activities, stepping in as Captain when required.',
    initials: 'LM',
    featured: false,
    linkedin: 'https://www.linkedin.com/in/lesego-mothapo-1986a81a2/',
  },
  {
    name: 'Matome Nkoana',
    role: 'Event Management Lead',
    desc: 'Planning and coordinating workshops, flagship events, and sourcing guest speakers and facilitators.',
    initials: 'MN',
    featured: false,
    linkedin: 'https://www.linkedin.com/in/matome-nkoana-89ab05122/',
  },
  {
    name: 'Gerdus Smit',
    role: 'Technical Lead',
    desc: 'Leading AWS learning sessions, mentoring members on cloud architecture and certification preparation.',
    initials: 'GS',
    featured: false,
    linkedin: 'https://www.linkedin.com/in/gerdus-smit-597a2022/',
  },
  {
    name: 'Brian Kodibona',
    role: 'IT Support Lead',
    desc: 'Coordinating technical resources, maintaining the club website and providing on-site support at events.',
    initials: 'BK',
    featured: false,
    linkedin: 'https://www.linkedin.com/in/brian-kodibona-0ab535176/',
  },
]

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Team() {
  return (
    <section id="team" className="relative bg-white overflow-hidden">

      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#5a0067] opacity-[0.05] blur-[120px]" />

      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 text-center">
        <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">The people behind it</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Meet the Team</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
          A small, dedicated group of students building something meaningful for the Unisa community.
        </p>
      </div>

      {/* Team grid */}
      <div className="relative max-w-6xl mx-auto px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEMBERS.map(({ name, role, desc, initials, featured, linkedin }) => (
            <div
              key={name}
              className={`group relative rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                featured
                  ? 'border-transparent shadow-xl shadow-[#5a0067]/15'
                  : 'border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-[#5a0067]/8'
              }`}
              style={featured ? { background: 'linear-gradient(160deg, #5a0067 0%, #8b00a0 100%)' } : {}}
            >
              {/* Avatar */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-extrabold mb-5 tracking-wide ${
                featured ? 'bg-white/20 text-white' : 'bg-[#5a0067]/8 text-[#5a0067] group-hover:bg-[#5a0067] group-hover:text-white transition-colors duration-300'
              }`}>
                {initials}
              </div>

              {featured && (
                <span className="absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/20 text-white">
                  Captain
                </span>
              )}

              <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${featured ? 'text-white/60' : 'text-[#5a0067]/70'}`}>
                {role}
              </p>
              <h3 className={`text-lg font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>
                {name}
              </h3>
              <p className={`text-sm leading-relaxed ${featured ? 'text-white/70' : 'text-gray-400'}`}>
                {desc}
              </p>

              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 ${
                  featured ? 'text-white/60 hover:text-white' : 'text-[#5a0067]/50 hover:text-[#5a0067]'
                }`}
              >
                <LinkedInIcon />
                LinkedIn
              </a>

              {!featured && (
                <div className="absolute bottom-0 left-7 right-7 h-[2px] rounded-full bg-[#5a0067] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
