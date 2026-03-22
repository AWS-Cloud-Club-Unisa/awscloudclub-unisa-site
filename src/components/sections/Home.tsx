import MeetupIcon, { MEETUP_URL } from '../MeetupIcon'

const REVIEWS = [
  { name: 'Madlalakhaya',       tags: ['Engaging', 'Made an impact', 'Welcoming host', 'Inclusive attendees', 'Good setting', 'I felt safe'] },
  { name: 'Charmaine Sekulane', tags: ['Inclusive attendees', 'Met new people', 'Punctual start', 'Welcoming host'] },
  { name: 'Christopher',        tags: ['Engaging'] },
  { name: 'Marion Angela O.',   tags: ['Was as described', 'Engaging', 'Made an impact', 'Welcoming host'] },
  { name: 'Nontobeko Nkomo',    tags: ['Good setting', 'Punctual start', 'Welcoming host'] },
  { name: 'Nokukhanya',         tags: ['Was as described', 'Engaging', 'Welcoming host'] },
  { name: 'Mandela Mua',        tags: ['Engaging', 'Welcoming host'] },
  { name: 'Dineo Ndlovu',       tags: ['Engaging', 'Made an impact', 'Good setting', 'Welcoming host'] },
  { name: 'Makahane Thakhani',  tags: ['Engaging'] },
  { name: 'Benjamin Wakida',    tags: ['Was as described', 'Punctual start', 'I felt safe', 'Welcoming host'] },
  { name: 'Ditshego',           tags: ['Made an impact'] },
]

// Duplicate for seamless infinite loop
const MARQUEE_ITEMS = [...REVIEWS, ...REVIEWS]

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">

      {/* ── Animated background orbs ─────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb-1 absolute -top-32 -left-32 w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full bg-[#5a0067] opacity-[0.13] blur-[80px] sm:blur-[90px]" />
        <div className="orb-2 absolute top-1/2 -right-20 w-[260px] h-[260px] sm:w-[440px] sm:h-[440px] rounded-full bg-[#8b00a0] opacity-[0.10] blur-[80px] sm:blur-[100px]" />
        <div className="orb-3 absolute bottom-0 left-1/3 w-[220px] h-[220px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#3d0047] opacity-[0.09] blur-[70px] sm:blur-[80px]" />
      </div>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-6 pt-8 pb-24 text-center">

        {/* Eyebrow pill */}
        <div className="animate-fade-in delay-100 mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#5a0067]/20 bg-[#5a0067]/5 px-3.5 py-1.5 max-w-full">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#5a0067] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-[#5a0067] uppercase truncate">
            Student · Peer-Driven · Cloud-Powered
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-200 max-w-4xl text-[2.6rem] leading-[1.1] sm:text-5xl sm:leading-[1.08] lg:text-7xl font-extrabold tracking-tight text-gray-900">
          Welcome to{' '}
          <span
            className="bg-clip-text text-transparent block sm:inline"
            style={{ backgroundImage: 'linear-gradient(135deg, #5a0067 0%, #9b00b5 50%, #5a0067 100%)' }}
          >
            AWS Cloud Club
          </span>
          <span className="text-gray-900"> @ Unisa</span>
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-up delay-300 mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-gray-500 leading-relaxed px-1">
          A student-focused, peer-driven community where we blend{' '}
          <span className="font-semibold text-gray-700">Content</span>,{' '}
          <span className="font-semibold text-gray-700">Community</span>, and{' '}
          <span className="font-semibold text-gray-700">Events</span> to help
          you learn the cloud.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-400 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
          <a
            href={MEETUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white shadow-lg shadow-[#5a0067]/25 transition-all duration-200 hover:shadow-[#5a0067]/40 hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg, #5a0067, #8b00a0)' }}
          >
            <MeetupIcon />
            Join the Club
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-[#5a0067] bg-white border border-[#5a0067]/25 shadow-sm hover:border-[#5a0067]/50 hover:shadow-md transition-all duration-200 hover:scale-[1.03]"
          >
            Learn More
          </a>
        </div>

        {/* Scroll cue */}
        <div className="animate-fade-in delay-600 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-300">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ── Core Focus ───────────────────────────────────────────── */}
      <div className="relative px-5 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10 sm:mb-16">
            <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">What we're about</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Our Core Focus</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Three pillars that make up everything we do at AWS Cloud Club.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-[#5a0067]/8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 sm:mb-5 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#5a0067]/8 text-[#5a0067] group-hover:bg-[#5a0067] group-hover:text-white transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-6 right-6 sm:left-8 sm:right-8 h-[2px] rounded-full bg-[#5a0067] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Who Can Join ─────────────────────────────────────────── */}
      <div className="relative px-5 sm:px-6 py-16 sm:py-24 lg:py-32 bg-[#5a0067]/[0.03]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            <div>
              <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">Membership</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Everyone<br />is welcome.
              </h2>
              <p className="mt-4 sm:mt-5 text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
                The club is student-led, but open to anyone curious about the cloud. Whether you are a student, an IT professional, or simply a cloud enthusiast, there is a place for you here.
              </p>
              <a
                href={MEETUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#5a0067] hover:gap-3 transition-all duration-200"
              >
                Get started today
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {['Students', 'IT Professionals', 'Cloud Enthusiasts', 'Career Changers'].map((tag) => (
                <div
                  key={tag}
                  className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-[#5a0067]/20 transition-all duration-200"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#5a0067]/10 flex items-center justify-center mb-2 sm:mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#5a0067]" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── What is the Cloud ────────────────────────────────────── */}
      <div className="relative px-5 sm:px-6 py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-[#5a0067] opacity-[0.04] blur-[120px]" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Text — comes first on mobile */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">What we focus on</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                AWS Cloud Club<br />@ Unisa
              </h2>
              <p className="mt-4 sm:mt-5 text-gray-500 text-sm sm:text-base leading-relaxed">
                We are centred on Amazon Web Services, the world's leading cloud platform. From core cloud concepts to real-world deployments, everything we do is hands-on and AWS-focused.
              </p>
              <p className="mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
                Whether you are getting started or looking to go deeper, our sessions cover the skills that matter most in today's industry.
              </p>
            </div>

            {/* Visual block */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl border border-[#5a0067]/10 bg-gradient-to-br from-[#5a0067]/5 to-[#8b00a0]/5 p-6 sm:p-10 overflow-hidden">
                <div aria-hidden="true" className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-[#5a0067]/10 blur-2xl" />
                <div className="relative space-y-3 sm:space-y-4">
                  {[
                    'AWS Cloud Services',
                    'Cloud Architecture & Design',
                    'DevOps & CI/CD Pipelines',
                    'Serverless & Containers',
                    'Cloud Security Fundamentals',
                    'AWS Certifications',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-[#5a0067]/30 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-[#5a0067]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Reviews ──────────────────────────────────────────────── */}
      <div className="relative py-16 sm:py-24 bg-[#5a0067]/[0.03] overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, rgba(249,247,250,0.95), transparent)' }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, rgba(249,247,250,0.95), transparent)' }} />

        {/* Header */}
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">What people say</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Reviews
          </h2>
          <div className="mt-4 inline-flex items-center gap-3 flex-wrap justify-center">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#5a0067]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm font-bold text-gray-900 ml-1">4.7</span>
              <span className="text-sm text-gray-400">· 14 reviews</span>
            </div>
            <a
              href="https://www.meetup.com/aws-cloud-club-at-university-of-south-africa/feedback-overview/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#5a0067] border border-[#5a0067]/25 px-3 py-1 rounded-full hover:bg-[#5a0067]/5 transition-colors duration-150"
            >
              View all on Meetup →
            </a>
          </div>
        </div>

        {/* Marquee track */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee flex gap-4 w-max">
            {MARQUEE_ITEMS.map(({ name, tags }, i) => (
              <div
                key={`${name}-${i}`}
                className="w-64 shrink-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-3.5 h-3.5 text-[#5a0067]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#5a0067]/8 text-[#5a0067]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
                  <div className="w-6 h-6 rounded-full bg-[#5a0067]/15 flex items-center justify-center text-[10px] font-bold text-[#5a0067]">
                    {name[0].toUpperCase()}
                  </div>
                  <p className="text-xs font-semibold text-gray-700 truncate">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}
