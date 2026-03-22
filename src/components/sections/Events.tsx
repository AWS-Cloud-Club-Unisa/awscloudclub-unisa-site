import MeetupIcon, { MEETUP_URL } from '../MeetupIcon'

const EVENTS = [
  {
    tag: 'Speaker Series',
    title: 'Guest Speaker Events',
    desc: 'Learn directly from industry experts, AWS Heroes, and cloud practitioners who share real-world experience and career insights.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    tag: 'Flagship',
    title: 'AWS Student Community Day',
    desc: 'Our biggest event of the year. A high-energy day of networking, keynotes, hands-on labs, and community building with AWS.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    tag: 'Regular',
    title: 'Hands-on Workshops',
    desc: 'Structured sessions where members plan, coordinate, and execute cloud labs together. Theory meets real practice.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    tag: 'Platform',
    title: 'Event Management via Meetup',
    desc: 'All our events are scheduled and managed through Meetup.com, your one place to see what\'s coming up, RSVP, and stay connected.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V13.5zm0 3h.008v.008H12v-.008zm0 3h.008v.008H12v-.008zm-3-6h.008v.008H9V13.5zm0 3h.008v.008H9v-.008zm0 3h.008v.008H9v-.008zm6-6h.008v.008h-.008V13.5zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
]

export default function Events() {
  return (
    <section id="events" className="relative bg-[#5a0067]/[0.03] overflow-hidden">

      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#5a0067] opacity-[0.04] blur-[130px]" />

      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 text-center">
        <p className="text-xs font-semibold tracking-widest text-[#5a0067] uppercase mb-3">What's on</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Events</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
          From intimate workshops to flagship community days, there is always something happening.
        </p>
      </div>

      {/* Event cards */}
      <div className="relative max-w-6xl mx-auto px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EVENTS.map(({ tag, title, desc, icon }, i) => (
            <div
              key={title}
              className={`group relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                i === 1
                  ? 'border-[#5a0067]/20 bg-white shadow-lg shadow-[#5a0067]/8'
                  : 'border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-[#5a0067]/8'
              }`}
            >
              {i === 1 && (
                <span className="absolute top-6 right-6 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full text-white"
                  style={{ background: 'linear-gradient(135deg, #5a0067, #8b00a0)' }}>
                  Flagship
                </span>
              )}

              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 transition-colors duration-300 ${
                i === 1
                  ? 'bg-[#5a0067] text-white'
                  : 'bg-[#5a0067]/8 text-[#5a0067] group-hover:bg-[#5a0067] group-hover:text-white'
              }`}>
                {icon}
              </div>

              <p className="text-[10px] font-bold tracking-widest text-[#5a0067]/60 uppercase mb-1.5">{tag}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

              <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-[#5a0067] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* ── Upcoming Event ───────────────────────────────────── */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] rounded-full bg-[#5a0067]" />
            <p className="text-xs font-bold tracking-widest text-[#5a0067] uppercase">Upcoming Event</p>
            <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full text-white animate-pulse"
              style={{ background: 'linear-gradient(135deg, #5a0067, #8b00a0)' }}>
              Live
            </span>
          </div>

          <div className="rounded-3xl border border-[#5a0067]/15 bg-white shadow-lg shadow-[#5a0067]/8 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">

              {/* Flyer image — fills full column height */}
              <div className="relative min-h-[240px] lg:min-h-0 lg:h-full overflow-hidden bg-gray-50">
                <img
                  src="/future-event.jpeg"
                  alt="Cloud Career and AWS Deep Dive event flyer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full text-white"
                  style={{ background: 'linear-gradient(135deg, #5a0067, #8b00a0)' }}>
                  Upcoming
                </span>
                <div className="absolute bottom-4 left-5 right-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Wed, 15 Apr 2026 · 6:00 PM SAST
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Online · Free
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
                    Cloud Career & AWS Deep Dive
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    An evening with two seasoned cloud professionals bridging the gap between studying and working in the cloud. Hear firsthand from a DevOps/Cloud Engineer and an AWS Solutions Architect, get career guidance, and gain insight into real-world AWS architectures.
                  </p>

                  {/* Speakers */}
                  <div className="space-y-2.5">
                    <p className="text-[10px] font-bold tracking-widest text-[#5a0067]/60 uppercase">Guest Speakers</p>
                    {[
                      { name: 'Sithembiso Mjoko', role: 'DevOps & Cloud Engineer · Big Beard Web Solutions' },
                      { name: 'Kanyisile Nobula', role: 'Solutions Architect & Cloud Support · AWS' },
                    ].map(({ name, role }) => (
                      <div key={name} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#5a0067]/10 flex items-center justify-center text-xs font-bold text-[#5a0067] shrink-0">
                          {name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 leading-none">{name}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats + CTA */}
                <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-2xl font-extrabold text-gray-900">120</p>
                      <p className="text-xs text-gray-400 font-medium">RSVPs</p>
                    </div>
                    <div className="w-px h-8 bg-gray-100" />
                    <div>
                      <p className="text-2xl font-extrabold text-gray-900">2 hrs</p>
                      <p className="text-xs text-gray-400 font-medium">Duration</p>
                    </div>
                  </div>
                  <a
                    href="https://www.meetup.com/aws-cloud-club-at-university-of-south-africa/events/313744140/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-md shadow-[#5a0067]/20 hover:shadow-lg hover:scale-[1.03] transition-all duration-200 whitespace-nowrap"
                    style={{ background: 'linear-gradient(135deg, #5a0067, #8b00a0)' }}
                  >
                    <MeetupIcon />
                    RSVP
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Past Events ──────────────────────────────────────── */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] rounded-full bg-[#5a0067]" />
            <p className="text-xs font-bold tracking-widest text-[#5a0067] uppercase">Past Events</p>
          </div>

          <a
            href="https://www.meetup.com/aws-cloud-club-at-university-of-south-africa/events/313036823/?eventOrigin=your_events"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-[#5a0067]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">

              {/* Flyer image — fills full column height, no fixed ratio */}
              <div className="relative min-h-[240px] lg:min-h-0 lg:h-full overflow-hidden bg-gray-50">
                <img
                  src="/past-event.png"
                  alt="Cloud Club Intro event flyer"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full text-white backdrop-blur-sm"
                  style={{ background: 'rgba(90,0,103,0.75)' }}>
                  Past Event
                </span>
              </div>

              {/* Details */}
              <div className="p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  {/* Rating row */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5a0067]/8">
                      <svg className="w-3.5 h-3.5 text-[#5a0067]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-bold text-[#5a0067]">4.7</span>
                    </div>
                    <span className="text-xs text-gray-400">14 reviews</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
                    Cloud Club Intro
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our inaugural session welcoming the core team and setting the stage for what's ahead. Members explored key AWS services, real-world cloud use cases, and how cloud skills translate into industry-ready experience — from architecture and best practices to hands-on labs and certifications.
                  </p>
                </div>

                {/* Stats + CTA */}
                <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-2xl font-extrabold text-gray-900">220</p>
                      <p className="text-xs text-gray-400 font-medium">RSVPs</p>
                    </div>
                    <div className="w-px h-8 bg-gray-100" />
                    <div>
                      <p className="text-2xl font-extrabold text-gray-900">14</p>
                      <p className="text-xs text-gray-400 font-medium">Reviews</p>
                    </div>
                    <div className="w-px h-8 bg-gray-100" />
                    <div>
                      <p className="text-2xl font-extrabold text-gray-900">4.7★</p>
                      <p className="text-xs text-gray-400 font-medium">Rating</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5a0067] group-hover:gap-2.5 transition-all duration-200">
                    View on Meetup
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

            </div>
          </a>
        </div>

        {/* Meetup CTA banner */}
        <div className="mt-8 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, #5a0067 0%, #8b00a0 100%)' }}>
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">Stay in the loop</p>
            <p className="text-white text-xl font-bold">Find us on Meetup.com</p>
            <p className="text-white/70 text-sm mt-1">RSVP to upcoming events and manage your schedule in one place.</p>
          </div>
          <a
            href={MEETUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#5a0067] bg-white hover:bg-gray-50 shadow-md transition-all duration-200 hover:scale-[1.03]"
          >
            <MeetupIcon />
            View on Meetup
          </a>
        </div>
      </div>

    </section>
  )
}
