const ROLES = ['Cloud Engineer', 'DevOps Engineer', 'AI Developer', 'Solutions Architect', 'Cloud Consultant']

const STATS = [
  { value: '34', label: 'Global Regions' },
  { value: '108', label: 'Availability Zones' },
  { value: '#1', label: 'Cloud Platform' },
  { value: '∞', label: 'Opportunities' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">

      {/* Subtle background orb */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#5a0067] opacity-[0.04] blur-[120px] translate-x-1/3 -translate-y-1/4" />

      {/* ── Section header ─────────────────────────────────────── */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 text-center">
        <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">Who we are</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">About Us</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
          Building the next generation of cloud leaders at the University of South Africa.
        </p>
      </div>

      {/* ── Vision + Mission ───────────────────────────────────── */}
      <div className="relative max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Vision */}
          <div className="relative rounded-3xl overflow-hidden p-10"
            style={{ background: 'linear-gradient(135deg, #5a0067 0%, #8b00a0 100%)' }}>
            <div aria-hidden="true" className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-white opacity-[0.06] blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 mb-6">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-2">Our Vision</p>
              <p className="text-white text-xl font-bold leading-snug">
                Empowering students with practical, in-demand cloud computing skills through a hands-on, collaborative learning community.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative rounded-3xl border border-gray-100 bg-white p-10 shadow-sm hover:shadow-lg hover:shadow-[#5a0067]/8 transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#5a0067]/8 mb-6">
              <svg className="w-5 h-5 text-[#5a0067]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <p className="text-[#5a0067] text-xs font-semibold tracking-widest uppercase mb-2">Our Mission</p>
            <p className="text-gray-700 text-xl font-bold leading-snug">
              Building a global network of student cloud leaders who are confident, certified, and industry-ready.
            </p>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Through mentorship and real industry exposure, we prepare you for what comes after graduation.
            </p>
          </div>

        </div>
      </div>

      {/* ── The Why ────────────────────────────────────────────── */}
      <div className="relative bg-[#5a0067]/[0.03] px-6 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">The Why</p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Every industry wants<br />cloud-literate graduates.
              </h3>
              <p className="mt-5 text-gray-500 text-base leading-relaxed">
                Whether you end up in finance, healthcare, retail, or tech, cloud skills are the fastest-growing and most in-demand across the board. We give you a head start.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {ROLES.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#5a0067]/20 bg-white text-sm font-semibold text-gray-700 shadow-sm hover:border-[#5a0067]/50 hover:text-[#5a0067] hover:shadow-md transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5a0067] shrink-0" />
                  {role}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── Global Reach (Stats) ───────────────────────────────── */}
      <div className="relative px-6 py-20 sm:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#5a0067] opacity-[0.05] blur-[100px] -translate-x-1/3 translate-y-1/4" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">Global Reach</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Backed by the world's largest cloud.
            </h3>
            <p className="mt-4 text-gray-400 max-w-lg mx-auto text-base">
              As an AWS Cloud Club, we are plugged directly into Amazon Web Services, the world's #1 cloud platform and the engine behind the internet.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm hover:shadow-xl hover:shadow-[#5a0067]/8 hover:-translate-y-1 transition-all duration-300"
              >
                <p
                  className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #5a0067, #8b00a0)' }}
                >
                  {value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
