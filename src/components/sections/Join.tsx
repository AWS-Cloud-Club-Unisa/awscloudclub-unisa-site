import MeetupIcon, { MEETUP_URL } from '../MeetupIcon'

const PERKS = [
  {
    title: 'Events',
    desc: 'Regular speaker sessions, workshops, and community meetups with cloud professionals and AWS practitioners.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V13.5zm0 3h.008v.008H12v-.008zm0 3h.008v.008H12v-.008zm-3-6h.008v.008H9V13.5zm0 3h.008v.008H9v-.008zm6-6h.008v.008h-.008V13.5zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Hackathons',
    desc: 'Compete, build, and solve real problems with a team. Great for your portfolio and your problem-solving skills.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Club Merch',
    desc: 'Rep the club with exclusive AWS Cloud Club @ Unisa merchandise for active members.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    title: 'Community',
    desc: 'Connect with like-minded people, share knowledge, and grow together in a supportive cloud community.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
]

const SKILLS = ['Teamwork', 'Leadership', 'Communication', 'Problem Solving', 'Cloud Architecture', 'Project Management']

export default function Join() {
  return (
    <section id="join" className="relative bg-white overflow-hidden">

      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#5a0067] opacity-[0.05] blur-[130px] -translate-y-1/2" />

      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 text-center">
        <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">Become a member</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Join Us</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
          Open to everyone. Students, professionals, career changers, and cloud enthusiasts. No prerequisites, just curiosity and a willingness to grow.
        </p>
      </div>

      {/* Member perks */}
      <div className="relative max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PERKS.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="group relative rounded-3xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-[#5a0067]/8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#5a0067]/8 text-[#5a0067] mb-5 group-hover:bg-[#5a0067] group-hover:text-white transition-colors duration-300">
                {icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              <div className="absolute bottom-0 left-7 right-7 h-[2px] rounded-full bg-[#5a0067] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>

      {/* Career boost */}
      <div className="relative bg-[#5a0067]/[0.03] px-6 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">Career Boost</p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Skills that matter<br />beyond the cloud.
              </h3>
              <p className="mt-5 text-gray-500 text-base leading-relaxed">
                Membership goes beyond technical skills. You'll sharpen the professional skills every employer looks for and build a network that opens real doors.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#5a0067]/15 bg-white text-sm font-semibold text-gray-700 shadow-sm hover:border-[#5a0067]/40 hover:text-[#5a0067] hover:shadow-md transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5a0067] shrink-0" />
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <div
          className="relative rounded-3xl p-10 sm:p-16 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #5a0067 0%, #8b00a0 100%)' }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white opacity-[0.05] blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-white opacity-[0.05] blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-white/90 uppercase">Open to everyone</span>
            </div>

            <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to build<br />your cloud future?
            </h3>
            <p className="mt-5 text-white/70 text-base max-w-lg mx-auto leading-relaxed">
              Join AWS Cloud Club @ Unisa on Meetup.com. It's free, it's open to everyone, and your first event is one click away.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={MEETUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#5a0067] bg-white hover:bg-gray-50 shadow-xl transition-all duration-200 hover:scale-[1.03]"
              >
                <MeetupIcon />
                Join on Meetup
              </a>
              <a
                href="mailto:awscloudclubunisa@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
