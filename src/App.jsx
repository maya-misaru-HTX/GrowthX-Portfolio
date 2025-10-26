import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeImpactTab, setActiveImpactTab] = useState('response')
  const [activeEnablementTab, setActiveEnablementTab] = useState('video')
  const [activeEnablementSectionTab, setActiveEnablementSectionTab] = useState('notion-ai')
  const [activeSection, setActiveSection] = useState('why-growthx')
  const [selectedGalleryImage, setSelectedGalleryImage] = useState({
    'notion-ai': 0,
    'enablement-program': 0,
    'workshop': 0
  })
  const [selectedGalleryImage2, setSelectedGalleryImage2] = useState({
    'notion-ai': 0,
    'enablement-program': 0
  })
  const [activeWorkshopTab, setActiveWorkshopTab] = useState('praise')
  const [activeWorkSampleTab, setActiveWorkSampleTab] = useState('efficiency')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const impactContent = {
    response: {
      title: 'Reduced average delivery time by',
      metric: '40%',
      subtitle: 'through automated routing',
      bullets: [
        'Automated routing rules directed requests to the right team members instantly.',
        'Replaced cross-team standups with async check-ins.'
      ],
      image: '/response-view.png'
    },
    visibility: {
      title: 'Leadership gained',
      metric: 'real-time',
      subtitle: 'insights into customer health trends',
      bullets: [
        'Dashboards provided instant visibility into customer health metrics.',
        'Tracked request patterns and team performance.'
      ],
      image: '/real-time.png'
    },
    scale: {
      title: 'Achieved',
      metric: '3x',
      subtitle: 'renewal rate improvement',
      bullets: [
        'Tracker helped CSMs identify usage gaps proactively.',
        'Centralized customer feedback collection for product improvements.',
        'Enabled data-driven interventions before churn risk.'
      ],
      image: '/accounts.png'
    }
  }

  const enablementContent = {
    video: {
      title: '5-Minute Video Walkthrough',
      bullets: [
        'Step-by-step tutorial on dashboard navigation and key features.',
        'Accessible on-demand for new team members.',
        'Reduced onboarding time for dashboard adoption.'
      ],
      image: '/enablement-video.png'
    },
    faq: {
      title: 'FAQ Documentation',
      bullets: [
        'Comprehensive guide addressing common questions and troubleshooting.',
        'Self-service resource reducing support tickets.',
        'Continuously updated based on team feedback.'
      ],
      image: '/enablement-faq.png'
    },
    training: {
      title: '25-Minute Training Session',
      bullets: [
        'Cross-functional workshop demonstrating dashboard use cases.',
        'Hands-on practice building custom views.',
        'Empowered marketers and CSMs to create their own analytics.'
      ],
      image: '/enablement-training.png'
    }
  }

  const enablementSectionContent = {
    'notion-ai': {
      title: 'Slack Best Practices',
      subtitle: '',
      audience: '',
      before: '<strong>78%</strong> of all Slack communication happened in DMs and <strong>almost no one replied in threads</strong>. This created silos where critical context was invisible to the broader team.',
      after: '6 months later, <strong>only 25%</strong> of the conversations occur in DMs and another <strong>60% happen in public channels</strong>, making it more searchable for both humans and AI.',
      description: '',
      images: [
        '/slack-0.png',
        '/slack-1.png',
        '/slack-2.png'
      ],
      images2: [
        '/slack-3.png',
        '/slack-4.png'
      ]
    },
    'enablement-program': {
      title: 'Notion + Notion AI Enablement Program',
      subtitle: '',
      audience: '',
      before: '<strong>Notion was only used for static documentation</strong> like company policy and SOPs. No one used databases, views, or AI features—leaving powerful workflow automation untapped.',
      after: 'Notion <strong>replaced dozens of tools</strong> for project management, goal-tracking, and client communication, <strong>saving hundreds of hours and $30,000+ of software cost annually</strong>.',
      description: 'Designed and facilitated targeted enablement workshops. CX team learned AI-accelerated ticket routing and response workflows, while the product team focused on AI-enhanced requirements gathering and user story generation. Both sessions used real work scenarios for immediate applicability.',
      images: [
        '/Notion-1.png',
        '/Notion-2.png',
        '/Notion-3.png',
        '/Notion-4.png',
        '/Notion-5.png'
      ],
      images2: [
        '/Notion-6.png',
        '/Notion-7.png',
        '/Notion-8.png',
        '/Notion-9.png'
      ]
    },
    'workshop': {
      title: 'Company-wide AI Workshop Series',
      subtitle: '',
      audience: '',
      before: 'Despite the AI-native external offering, <strong>there was no effort to implement AI in internal workflows</strong> beyond individual usage of ChatGPT. <strong>Teams spent hours on repetitive manual tasks</strong>.',
      after: 'Launched the <strong>AI Working Group with COO, CTO, and Head of Marketing</strong> to implement <strong>cross-functional and team-specific AI solutions</strong> to empower expert-led workflows.',
      description: 'Launched the AI Working Group to make the company more AI-native. The first workshop focused on mindset shift and everyday productivity over function-specific tips, teaching teams to leverage AI for repetitive tasks.',
      images: [
        '/feedback-1.png',
        '/feedback-2.png'
      ],
      embedUrl: '/Building-AI-Ready-Habits-at-MakerSights.pdf',
      embedType: 'pdf'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation Header - Option 3: Animated Underline with Active State */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
        <nav className="container-custom">
          <div className="flex items-center justify-center gap-8 py-4">
            <a
              href="#about-me"
              className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors pb-1 group"
            >
              About me
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#fccc00] transition-all duration-300 ${
                activeSection === 'about-me' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a
              href="#why-growthx"
              className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors pb-1 group"
            >
              Why GrowthX?
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#fccc00] transition-all duration-300 ${
                activeSection === 'why-growthx' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a
              href="#customer-health"
              className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors pb-1 group"
            >
              Customer Health
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#fccc00] transition-all duration-300 ${
                activeSection === 'customer-health' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a
              href="#data-forecasting"
              className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors pb-1 group"
            >
              Data & Forecasting
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#fccc00] transition-all duration-300 ${
                activeSection === 'data-forecasting' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a
              href="#enablement"
              className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors pb-1 group"
            >
              Enablement
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#fccc00] transition-all duration-300 ${
                activeSection === 'enablement' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a
              href="#work-sample"
              className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors pb-1 group"
            >
              Work Sample
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#fccc00] transition-all duration-300 ${
                activeSection === 'work-sample' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a
              href="/Misaki-Funada_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#fccc00] text-gray-900 font-semibold rounded-full hover:bg-[#d9a800] transition-all duration-300 hover:shadow-lg"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      {/* About Section */}
      <section id="about-me" className="section-spacing">
        <div className="container-custom max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Headshot and Info Cards */}
            <div className="flex-shrink-0 w-full lg:w-80">
              <img
                src="/headshot.png"
                alt="Misaki Funada"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-white mx-auto lg:mx-0 mb-3"
              />
              {/* Info Cards */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">🌎</span>
                    <h3 className="text-lg font-semibold">Houston, TX (CST)</h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Born in Tokyo, lived across New Zealand, Denmark, Sweden, and 5 US states.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">🎓</span>
                    <h3 className="text-lg font-semibold">Certifications</h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Notion, HubSpot, and Salesforce Admin
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 mt-12">
              <p className="text-2xl text-gray-600 mb-2">Customer Success Operations Candidate</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Misaki Funada <span className="text-xl text-gray-600">(they/them)</span>
              </h2>
              <p className="text-base text-gray-600 mb-8">
                7 years in AI Ops & Growth at early-stage startups (pre-seed ~ Series B)
              </p>

              {/* Specialization Box */}
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-6 mb-8">
                <p className="text-base text-gray-700 leading-relaxed">
                  As the right hand to founders at startups and tech-enabled agencies, I've led content and community marketing as well as product, GTM, and customer operations. I build AI-powered workflows that turn chaos into scalable systems—maximizing team potential and business impact.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/misaki-funada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#fccc00] text-gray-900 font-semibold rounded-full hover:bg-[#d9a800] transition-all border-2 border-[#fccc00]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="#work-sample"
                  className="inline-flex items-center px-6 py-2.5 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-all border-2 border-gray-300"
                >
                  View Work Samples
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* Why GrowthX AI Section */}
      <section id="why-growthx" className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="badge">01</span>
              <h2 className="text-2xl md:text-3xl font-semibold">Why GrowthX AI?</h2>
            </div>

            {/* Three Cards Horizontally */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Service-as-Software Card */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">💡</span>
                  <h4 className="text-lg font-semibold">Service-as-Software Approach</h4>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  I believe the best outcomes happen when expert-led service meets smart automation—not one or the other. GrowthX embodies this philosophy perfectly and that's the kind of company I want to help scale.
                </p>
              </div>

              {/* First-Hand Pain as Growth Lead Card */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h4 className="text-lg font-semibold">My Growth Background</h4>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Leading growth at early-stage startups, I've experienced how disconnected tools create friction. I'm drawn to AI solutions that integrate seamlessly and amplify work rather than add complexity.
                </p>
              </div>

              {/* Operations-First Founders / Company Culture Card */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">👥</span>
                  <h4 className="text-lg font-semibold">Founder-Led Internal Ops Rigor</h4>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Leadership that does the job first, identifies excellence, standardizes it, then scales. GrowthX's operational rigor with genuine team care mirrors how I want to build a people-first company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-5"></div>

      {/* Measuring Customer Health */}
      <section id="customer-health" className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg px-20 py-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="badge">02</span>
                <h2 className="text-2xl md:text-3xl font-semibold">Measuring Customer Health</h2>
              </div>

              <p className="text-lg text-gray-700 font-medium mb-8">
                Built a centralized intake tracking system that reduced delivery times by 40% and scaled to handle a 3x renewal rate compared to previous year with 15% reduced headcount.
              </p>

              {/* Before/After - Side by Side Layout */}
              <div className="mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Before - Problem */}
                  <div>
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm font-semibold rounded mb-2">BEFORE</span>
                      <p className="text-base text-gray-700 leading-relaxed">
                        Manual and disconnected spreadsheets with little visibility into usage and delivery speed.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg overflow-hidden aspect-video">
                      <img
                        src="/problem-spreahsheet.png"
                        alt="Manual spreadsheet showing disconnected data"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* After - Solution */}
                  <div>
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded mb-2">AFTER</span>
                      <p className="text-base text-gray-700 leading-relaxed">
                        Linked Notion database with team-specific views, automations, and end-to-end metrics.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg overflow-hidden aspect-video">
                      <img
                        src="/solution-notion.png"
                        alt="Notion dashboard with team-specific views and automations"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact - Highlighted container */}
              <div className="bg-gradient-to-br from-[#fff4cc] to-white border-2 border-[#fccc00] rounded-xl p-8 shadow-lg">
              <div className="border-b border-gray-200 mb-4">
                <div className="flex gap-6">
                  <button
                    onClick={() => setActiveImpactTab('response')}
                    className={`pb-3 border-b-2 font-medium transition-colors ${
                      activeImpactTab === 'response'
                        ? 'border-[#fccc00] text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    40% Faster Delivery
                  </button>
                  <button
                    onClick={() => setActiveImpactTab('scale')}
                    className={`pb-3 border-b-2 font-medium transition-colors ${
                      activeImpactTab === 'scale'
                        ? 'border-[#fccc00] text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    3x Renewal Rate
                  </button>
                  <button
                    onClick={() => setActiveImpactTab('visibility')}
                    className={`pb-3 border-b-2 font-medium transition-colors ${
                      activeImpactTab === 'visibility'
                        ? 'border-[#fccc00] text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    Real-Time Leadership Visibility
                  </button>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-1">
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    {impactContent[activeImpactTab].title} <span className="text-2xl font-bold">{impactContent[activeImpactTab].metric}</span> {impactContent[activeImpactTab].subtitle}
                  </p>
                  <ul className="space-y-2 text-base text-gray-700">
                    {impactContent[activeImpactTab].bullets.map((bullet, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-gray-500 flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={impactContent[activeImpactTab].image}
                      alt={`${activeImpactTab} impact screenshot`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* Data Dashboard */}
      <section id="data-forecasting" className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="badge">03</span>
              <h2 className="text-3xl md:text-4xl">Data & Forecasting</h2>
            </div>

            <p className="text-lg text-gray-700 font-medium mb-8">
              In the pre-AI era, I self-taught HubSpot admin, HTML, and SQL to build company-wide dashboards.
            </p>

            {/* Impact Section */}
            <div className="bg-gradient-to-br from-[#fff4cc] to-white border-2 border-[#fccc00] rounded-xl p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <p className="text-base text-gray-700 leading-relaxed">
                  <span className="text-2xl font-bold">27%</span>{' '}
                  <span className="font-semibold">profit growth</span> from the previous quarter, breaking a record for the most profitable month.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  <span className="text-2xl font-bold">50%</span>{' '}
                  <span className="font-semibold">reduction</span> of strategy meeting hours through increased visibility of key metrics for all stakeholders.
                </p>
              </div>

              {/* Dashboard Image */}
              <div>
                <img
                  src="/dashboard.png"
                  alt="Data analytics dashboard"
                  className="w-full rounded-lg border border-gray-200"
                />
              </div>
            </div>

            <div className="space-y-3">

            {/* Combined Revenue Forecast */}
            <div className="bg-white border border-transparent rounded-lg p-6 transition-shadow">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <h3 className="text-lg font-medium mb-3">Combined Revenue Forecast</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    This widget shows revenue forecast for all business units combined. Based on user feedback, I designed a filter to toggle irrelevant information, allowing users to focus on targeted forecast for their business unit.
                  </p>
                </div>
                <div>
                  <img
                    src="/forecast.png"
                    alt="Combined Revenue Forecast dashboard"
                    className="w-full rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </div>

            {/* Driving Adoption */}
            <div className="bg-white border border-transparent rounded-lg p-6 transition-shadow">
              <h3 className="text-lg font-medium mb-3">Driving Adoption</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-2">
                Delivered enablement resources (5-minute video walkthrough, FAQ documentation, 25-minute training session) that empowered marketers and CSMs to build their own dashboards for data-driven decision-making.
              </p>

              {/* Dashboard Views Image */}
              <img
                src="/dashboard-views.png"
                alt="Team-created dashboard views"
                className="w-full rounded-lg border border-gray-200"
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-5"></div>

      {/* Training & Enablement */}
      <section id="enablement" className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="badge">04</span>
              <h2 className="text-3xl md:text-4xl">Enablement</h2>
            </div>
            <p className="text-base text-gray-700 mb-8 leading-relaxed">
              I meet people where they are—breaking down materials for each audience and proficiency level. By designing enablement resources with no jargon, clear use cases, and real work examples, I drive measurable adoption.
            </p>

            {/* Tabs Interface with White Background */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="border-b border-gray-200 mb-6">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveEnablementSectionTab('workshop')}
                  className={`pb-3 border-b-2 font-medium transition-colors ${
                    activeEnablementSectionTab === 'workshop'
                      ? 'border-[#fccc00] text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  🛠️ Company-Wide AI Transformation
                </button>
                <button
                  onClick={() => setActiveEnablementSectionTab('notion-ai')}
                  className={`pb-3 border-b-2 font-medium transition-colors ${
                    activeEnablementSectionTab === 'notion-ai'
                      ? 'border-[#fccc00] text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  💬 Slack Best Practices
                </button>
                <button
                  onClick={() => setActiveEnablementSectionTab('enablement-program')}
                  className={`pb-3 border-b-2 font-medium transition-colors ${
                    activeEnablementSectionTab === 'enablement-program'
                      ? 'border-[#fccc00] text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  🎓 Notion 101 + Notion AI
                </button>
              </div>
            </div>
            <div className="space-y-6">
              {activeEnablementSectionTab === 'workshop' ? (
                // Workshop Tab: Before/After side by side, then embeds below
                <div className="space-y-6">
                  {/* Before/After - Horizontal Layout */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm font-semibold rounded mb-2">BEFORE</span>
                      <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: enablementSectionContent[activeEnablementSectionTab].before }}></p>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded mb-2">AFTER</span>
                      <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: enablementSectionContent[activeEnablementSectionTab].after }}></p>
                    </div>
                  </div>

                  {/* Yellow Container with Tabs */}
                  <div className="mx-auto bg-gradient-to-br from-[#fff4cc] to-white border-2 border-[#fccc00] rounded-xl p-8 shadow-lg" style={{ width: '80%' }}>
                    {/* Tabs */}
                    <div className="border-b border-gray-200 mb-6">
                      <div className="flex gap-6">
                        <button
                          onClick={() => setActiveWorkshopTab('praise')}
                          className={`pb-3 border-b-2 font-medium transition-colors ${
                            activeWorkshopTab === 'praise'
                              ? 'border-[#fccc00] text-gray-900'
                              : 'border-transparent text-gray-500 hover:text-gray-900'
                          }`}
                        >
                          Praise from Senior Leaders
                        </button>
                        <button
                          onClick={() => setActiveWorkshopTab('projects')}
                          className={`pb-3 border-b-2 font-medium transition-colors ${
                            activeWorkshopTab === 'projects'
                              ? 'border-[#fccc00] text-gray-900'
                              : 'border-transparent text-gray-500 hover:text-gray-900'
                          }`}
                        >
                          Project Examples
                        </button>
                      </div>
                    </div>

                    {/* Tab Content */}
                    <div>
                      {activeWorkshopTab === 'praise' ? (
                        <div className="relative group">
                          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white relative">
                            <img
                              src={enablementSectionContent[activeEnablementSectionTab].images[selectedGalleryImage[activeEnablementSectionTab]]}
                              alt={`Praise from CEO - ${selectedGalleryImage[activeEnablementSectionTab] + 1}`}
                              className="w-full h-auto"
                            />
                            {enablementSectionContent[activeEnablementSectionTab].images.length > 1 && (
                              <>
                                {/* Previous Button */}
                                <button
                                  onClick={() => setSelectedGalleryImage({
                                    ...selectedGalleryImage,
                                    [activeEnablementSectionTab]: selectedGalleryImage[activeEnablementSectionTab] === 0
                                      ? enablementSectionContent[activeEnablementSectionTab].images.length - 1
                                      : selectedGalleryImage[activeEnablementSectionTab] - 1
                                  })}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#fccc00] hover:scale-110"
                                >
                                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                </button>
                                {/* Next Button */}
                                <button
                                  onClick={() => setSelectedGalleryImage({
                                    ...selectedGalleryImage,
                                    [activeEnablementSectionTab]: selectedGalleryImage[activeEnablementSectionTab] === enablementSectionContent[activeEnablementSectionTab].images.length - 1
                                      ? 0
                                      : selectedGalleryImage[activeEnablementSectionTab] + 1
                                  })}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#fccc00] hover:scale-110"
                                >
                                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                                {/* Image Counter */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                                  {selectedGalleryImage[activeEnablementSectionTab] + 1} / {enablementSectionContent[activeEnablementSectionTab].images.length}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                          <img
                            src="/ai-project.png"
                            alt="AI Projects"
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Embedded Presentation */}
                  {enablementSectionContent[activeEnablementSectionTab].embedUrl && (
                    <div className="mx-auto" style={{ width: '80%' }}>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <iframe
                          src={`${enablementSectionContent[activeEnablementSectionTab].embedUrl}#toolbar=0&view=FitH`}
                          style={{ width: '100%', height: '360px' }}
                          title={enablementSectionContent[activeEnablementSectionTab].title}
                          className="w-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Other Tabs: Before/After side by side, Image Gallery below
                <div className="space-y-6">
                  {/* Before/After - Horizontal Layout */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm font-semibold rounded mb-2">BEFORE</span>
                      <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: enablementSectionContent[activeEnablementSectionTab].before }}></p>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded mb-2">AFTER</span>
                      <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: enablementSectionContent[activeEnablementSectionTab].after }}></p>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div>
                    {activeEnablementSectionTab === 'notion-ai' || activeEnablementSectionTab === 'enablement-program' ? (
                      // Slack & Notion: Two carousels side by side
                      <div className={`grid gap-6 ${enablementSectionContent[activeEnablementSectionTab].images2?.length > 0 ? 'md:grid-cols-2' : ''}`}>
                        {/* First Gallery */}
                        <div className="relative group">
                          <div className="border border-gray-200 rounded-lg overflow-hidden relative" style={{ height: '480px' }}>
                            <img
                              src={enablementSectionContent[activeEnablementSectionTab].images[selectedGalleryImage[activeEnablementSectionTab]]}
                              alt={`${enablementSectionContent[activeEnablementSectionTab].title} - Gallery 1 Image ${selectedGalleryImage[activeEnablementSectionTab] + 1}`}
                              className="w-full h-full object-contain"
                            />
                            {enablementSectionContent[activeEnablementSectionTab].images.length > 1 && (
                              <>
                                <button
                                  onClick={() => setSelectedGalleryImage({
                                    ...selectedGalleryImage,
                                    [activeEnablementSectionTab]: selectedGalleryImage[activeEnablementSectionTab] === 0
                                      ? enablementSectionContent[activeEnablementSectionTab].images.length - 1
                                      : selectedGalleryImage[activeEnablementSectionTab] - 1
                                  })}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#fccc00] hover:scale-110"
                                >
                                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => setSelectedGalleryImage({
                                    ...selectedGalleryImage,
                                    [activeEnablementSectionTab]: selectedGalleryImage[activeEnablementSectionTab] === enablementSectionContent[activeEnablementSectionTab].images.length - 1
                                      ? 0
                                      : selectedGalleryImage[activeEnablementSectionTab] + 1
                                  })}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#fccc00] hover:scale-110"
                                >
                                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                                  {selectedGalleryImage[activeEnablementSectionTab] + 1} / {enablementSectionContent[activeEnablementSectionTab].images.length}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        {/* Second Gallery */}
                        {enablementSectionContent[activeEnablementSectionTab].images2?.length > 0 && (
                        <div className="relative group">
                          <div className="border border-gray-200 rounded-lg overflow-hidden relative" style={{ height: '480px' }}>
                            <img
                              src={enablementSectionContent[activeEnablementSectionTab].images2[selectedGalleryImage2[activeEnablementSectionTab]]}
                              alt={`${enablementSectionContent[activeEnablementSectionTab].title} - Gallery 2 Image ${selectedGalleryImage2[activeEnablementSectionTab] + 1}`}
                              className="w-full h-full object-contain"
                            />
                            {enablementSectionContent[activeEnablementSectionTab].images2.length > 1 && (
                              <>
                                <button
                                  onClick={() => setSelectedGalleryImage2({
                                    ...selectedGalleryImage2,
                                    [activeEnablementSectionTab]: selectedGalleryImage2[activeEnablementSectionTab] === 0
                                      ? enablementSectionContent[activeEnablementSectionTab].images2.length - 1
                                      : selectedGalleryImage2[activeEnablementSectionTab] - 1
                                  })}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#fccc00] hover:scale-110"
                                >
                                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => setSelectedGalleryImage2({
                                    ...selectedGalleryImage2,
                                    [activeEnablementSectionTab]: selectedGalleryImage2[activeEnablementSectionTab] === enablementSectionContent[activeEnablementSectionTab].images2.length - 1
                                      ? 0
                                      : selectedGalleryImage2[activeEnablementSectionTab] + 1
                                  })}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#fccc00] hover:scale-110"
                                >
                                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                                  {selectedGalleryImage2[activeEnablementSectionTab] + 1} / {enablementSectionContent[activeEnablementSectionTab].images2.length}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        )}
                      </div>
                    ) : (
                      // Other tabs: Carousel
                      <div className="relative group">
                        {/* Main Image */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden relative" style={{ height: '400px' }}>
                          <img
                            src={enablementSectionContent[activeEnablementSectionTab].images[selectedGalleryImage[activeEnablementSectionTab]]}
                            alt={`${enablementSectionContent[activeEnablementSectionTab].title} - Image ${selectedGalleryImage[activeEnablementSectionTab] + 1}`}
                            className="w-full h-full object-contain"
                          />

                          {/* Show carousel controls only if there's more than 1 image */}
                          {enablementSectionContent[activeEnablementSectionTab].images.length > 1 && (
                            <>
                              {/* Previous Button - Overlaid on Image */}
                              <button
                                onClick={() => setSelectedGalleryImage({
                                  ...selectedGalleryImage,
                                  [activeEnablementSectionTab]: selectedGalleryImage[activeEnablementSectionTab] === 0
                                    ? enablementSectionContent[activeEnablementSectionTab].images.length - 1
                                    : selectedGalleryImage[activeEnablementSectionTab] - 1
                                })}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#fccc00] hover:scale-110"
                              >
                                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>

                              {/* Next Button - Overlaid on Image */}
                              <button
                                onClick={() => setSelectedGalleryImage({
                                  ...selectedGalleryImage,
                                  [activeEnablementSectionTab]: selectedGalleryImage[activeEnablementSectionTab] === enablementSectionContent[activeEnablementSectionTab].images.length - 1
                                    ? 0
                                    : selectedGalleryImage[activeEnablementSectionTab] + 1
                                })}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#fccc00] hover:scale-110"
                              >
                                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>

                              {/* Image Counter - Bottom Center */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                                {selectedGalleryImage[activeEnablementSectionTab] + 1} / {enablementSectionContent[activeEnablementSectionTab].images.length}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* Featured Work Sample */}
      <section id="work-sample" className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="badge">05</span>
              <h2 className="text-3xl md:text-4xl">Work Sample</h2>
            </div>
            <p className="text-base text-gray-600 mb-8 max-w-3xl">
              TypeScript app to turn CSV files into customer-ready charts with deeper analysis
            </p>

            {/* Before/After - Horizontal Layout */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm font-semibold rounded mb-3">BEFORE</span>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Excel-based stat sig testing created error-prone process</p>
                  <p>• Charts lacked consistency and needed customization per brand</p>
                  <p>• Time-intensive slide edits burned creative capacity</p>
                </div>
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded mb-3">AFTER</span>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Built-in stat sig, one-click cuts, visible calculations for verification</p>
                  <p>• On-brand charts with 100% consistency and customization</p>
                  <p>• Zero manual edits, freed time for strategic work</p>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-gradient-to-br from-[#fff4cc] to-white border-2 border-[#fccc00] rounded-xl p-6 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Metrics stacked vertically on left */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <p className="text-base font-semibold text-gray-900"><span className="text-3xl font-bold text-gray-900">75%</span> reduction in deck delivery time</p>
                    <p className="text-sm text-gray-700">(from 5-20 hours to 1-5 hours per test)</p>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 mb-2">Increased customer appreciation</p>
                    <p className="text-sm text-gray-700">through much deeper analysis that was previously impossible</p>
                  </div>
                </div>
                {/* Image on right */}
                <div className="flex items-center">
                  <img src="/customer-feedback.png" alt="Customer Feedback" className="w-full h-auto rounded" />
                </div>
              </div>
            </div>

            {/* Demo Video */}
            <div className="mb-8 mx-auto overflow-hidden rounded border border-gray-200" style={{ aspectRatio: '16 / 9', width: '80%' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'left center' }}
                poster="/ora-1.png"
              >
                <source src="/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* 3-Tab Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <div className="flex gap-8">
                  <button
                    onClick={() => setActiveWorkSampleTab('efficiency')}
                    className={`pb-3 text-base font-medium transition-colors ${
                      activeWorkSampleTab === 'efficiency'
                        ? 'border-b-2 border-[#fccc00] text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    Problem Discovery + Scoping
                  </button>
                  <button
                    onClick={() => setActiveWorkSampleTab('accuracy')}
                    className={`pb-3 text-base font-medium transition-colors ${
                      activeWorkSampleTab === 'accuracy'
                        ? 'border-b-2 border-[#fccc00] text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    Solutioning
                  </button>
                  <button
                    onClick={() => setActiveWorkSampleTab('customer')}
                    className={`pb-3 text-base font-medium transition-colors ${
                      activeWorkSampleTab === 'customer'
                        ? 'border-b-2 border-[#fccc00] text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    Enablement + Adoption
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div style={{ minHeight: '432px' }}>
                {activeWorkSampleTab === 'efficiency' && (
                  <div>
                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      <li>1. Conducted discovery interviews with Customer Success Managers (CSMs) and analysts to clarify the current workflows.</li>
                      <li>2. Organized a userflow with the tools used in each step.</li>
                      <li>3. Identified addressable problems and stakeholders needed to solve other areas.</li>
                    </ul>
                    <div className="mt-6">
                      <img src="/userflow.png" alt="User Flow" className="w-full h-auto rounded block" />
                    </div>
                  </div>
                )}

                {activeWorkSampleTab === 'accuracy' && (
                  <div>
                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      <li>1. Created 6 CustomGPTs to experiment with point solutions.</li>
                      <li>2. Piloted AI data analytics tools like Julius and Fabi to evaluate existing tools.</li>
                      <li>3. Compared existing AI solutions against vibe-coding a custom tool.</li>
                    </ul>
                    <div className="mt-6">
                      <img src="/solutioning.png" alt="Solutioning" className="w-full h-auto rounded block" />
                    </div>
                  </div>
                )}

                {activeWorkSampleTab === 'customer' && (
                  <div>
                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      <li>1. Led a 30-min enablement session to teach how to make the most out of the app.</li>
                      <li>2. Created a clear SOP for async training.</li>
                      <li>3. Achieved 90% tool adoption for customer deliverables.</li>
                    </ul>
                    <div className="mt-6">
                      <img src="/adoption.png" alt="Enablement + Adoption" className="w-full h-auto rounded block" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12"></div>

      {/* Let's Connect */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="bg-gray-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">Let's Connect</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              I'm excited about the opportunity to build GrowthX's operational backbone. If you're
              processing thousands of applications and need someone who can deliver clarity, data,
              and structure to your delivery teams—let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/misaki-funada/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center px-8 py-3.5 bg-[#fccc00] text-gray-900 font-semibold rounded-full hover:bg-[#d9a800] transition-all shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:mkfn.dn.nb@gmail.com"
                className="btn-outline-white"
              >
                Email Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12"></div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container-custom">
          <p className="text-center text-sm text-gray-500">
            © 2025 Misaki Funada · Built with Claude Code for GrowthX Application
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
