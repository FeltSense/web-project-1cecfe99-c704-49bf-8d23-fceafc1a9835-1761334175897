'use client'

import React, { useState, FormEvent } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-sm border-b border-gray-100 group [&.scrolled]:py-3 [&.scrolled]:shadow-sm py-6">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3 transition-all duration-500 group-[.scrolled]:scale-95">
        <div className="w-9 h-9 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-xl font-semibold text-slate-800 tracking-tight">Imaginry Space</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <a href="#home" className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
          Home
        </a>
        <a href="#services" className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
          Services
        </a>
        <a href="#work" className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
          Our Work
        </a>
        <a href="#about" className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
          About
        </a>
        <a href="#pricing" className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
          Pricing
        </a>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="#contact" className="px-5 py-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 hover:shadow-md transition-all duration-300 text-sm font-medium">
          Start a Project
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-all duration-300">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {/* Mobile Menu */}
    <div className="md:hidden hidden mt-6 pb-4 space-y-2 border-t border-gray-100 pt-6">
      <a href="#home" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
        Services
      </a>
      <a href="#work" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
        Our Work
      </a>
      <a href="#about" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 bg-slate-800 text-white text-center rounded-lg hover:bg-slate-900 transition-all duration-300 text-sm font-medium mt-4">
        Start a Project
      </a>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/40 to-purple-200/30 rounded-full blur-3xl animate-pulse opacity-60"></div>
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/30 to-indigo-200/40 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
  </div>

  {/* Floating Text Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-32 left-12 text-slate-300/40 text-sm font-light animate-float" style={{ animationDelay: '0s' }}>
      Brand Strategy
    </div>
    <div className="absolute top-48 right-24 text-slate-300/40 text-sm font-light animate-float" style={{ animationDelay: '1.5s' }}>
      Content Marketing
    </div>
    <div className="absolute bottom-40 left-32 text-slate-300/40 text-sm font-light animate-float" style={{ animationDelay: '2.5s' }}>
      Performance Analytics
    </div>
    <div className="absolute bottom-56 right-16 text-slate-300/40 text-sm font-light animate-float" style={{ animationDelay: '3s' }}>
      Creative Direction
    </div>
    <div className="absolute top-1/3 left-1/4 text-slate-300/40 text-sm font-light animate-float" style={{ animationDelay: '1s' }}>
      Campaign Design
    </div>
    <div className="absolute top-2/3 right-1/3 text-slate-300/40 text-sm font-light animate-float" style={{ animationDelay: '2s' }}>
      Market Research
    </div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24">
    <div className="text-center max-w-4xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full shadow-sm mb-8">
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
        <span className="text-sm text-slate-600 font-medium">Marketing Agency for Growth-Stage Companies</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
        Imaginry Space
      </h1>
      
      <p className="text-2xl sm:text-3xl text-slate-700 font-light mb-8 leading-relaxed">
        Marketing That Moves Metrics, Not Just Messages
      </p>

      {/* Value Proposition */}
      <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        We build demand generation engines for B2B SaaS and tech companies. From positioning strategy to multi-channel campaigns that drive qualified pipeline—not vanity metrics.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a 
          href="#contact" 
          className="px-8 py-4 bg-slate-900 text-white rounded-lg font-medium shadow-sm hover:shadow-md hover:bg-slate-800 transition-all duration-300 ease-in-out"
        >
          Book a Strategy Call
        </a>
        <a 
          href="#case-studies" 
          className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-900 rounded-lg font-medium border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 ease-in-out"
        >
          View Our Work
        </a>
      </div>

      {/* Service Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="text-slate-900 font-semibold mb-2">Demand Generation</div>
          <p className="text-sm text-slate-600">Multi-channel campaigns that fill your pipeline with qualified leads</p>
        </div>
        <div className="bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="text-slate-900 font-semibold mb-2">Content Strategy</div>
          <p className="text-sm text-slate-600">Thought leadership content that positions you as the category leader</p>
        </div>
        <div className="bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="text-slate-900 font-semibold mb-2">Performance Marketing</div>
          <p className="text-sm text-slate-600">Data-driven paid campaigns optimized for CAC and conversion rates</p>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2">
      <div className="w-1.5 h-3 bg-slate-400 rounded-full"></div>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
        opacity: 0.4;
      }
      50% {
        transform: translateY(-20px);
        opacity: 0.6;
      }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}</style>
</section>
      
      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-4xl font-light text-slate-900 mb-4">
        What We Do at Imaginry Space
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed">
        We're a creative marketing studio that builds brands people actually remember. From campaign strategy to final execution, our team brings 15+ years of combined experience across tech, retail, and lifestyle sectors.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Service 1 */}
      <div className="group relative bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <div className="p-8">
          <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-indigo-100">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-2xl font-medium text-slate-900 mb-3">
            Brand Identity & Positioning
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Complete brand development including logo design, color systems, typography guidelines, and brand voice documentation. We deliver a 40-page brand book with usage examples and templates.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="px-8 pb-8 relative">
          <div className="pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <p className="text-sm text-slate-500 mb-3">Deliverables include:</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                Primary and secondary logo variations
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                Brand guidelines document with usage rules
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                Social media templates and asset library
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className="group relative bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <div className="p-8">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-blue-100">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </div>
          <h3 className="text-2xl font-medium text-slate-900 mb-3">
            Paid Media Campaigns
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Full-funnel ad campaigns across Google Ads, Meta, LinkedIn, and TikTok. We handle creative production, audience targeting, budget allocation, and A/B testing with weekly performance reports.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="px-8 pb-8 relative">
          <div className="pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <p className="text-sm text-slate-500 mb-3">What's included:</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Campaign strategy with audience segmentation
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Ad creative in 8+ formats (static, video, carousel)
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Monthly optimization with ROAS tracking
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service 3 */}
      <div className="group relative bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <div className="p-8">
          <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-purple-100">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <h3 className="text-2xl font-medium text-slate-900 mb-3">
            Content Marketing & SEO
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Strategic content creation with keyword research, editorial calendars, and SEO optimization. We produce blog posts, case studies, whitepapers, and email sequences that drive organic traffic and conversions.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-pink-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="px-8 pb-8 relative">
          <div className="pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <p className="text-sm text-slate-500 mb-3">Monthly packages include:</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                8-12 SEO-optimized articles (800-1,500 words)
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Keyword research and competitor content analysis
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Meta descriptions, internal linking, and image optimization
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service 4 */}
      <div className="group relative bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <div className="p-8">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-slate-200">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-medium text-slate-900 mb-3">
            Marketing Analytics & Reporting
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Custom dashboards and monthly performance reports tracking KPIs across all channels. We connect Google Analytics, CRM data, and ad platforms to show attribution, customer journey, and ROI metrics.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 to-gray-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="px-8 pb-8 relative">
          <div className="pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <p className="text-sm text-slate-500 mb-3">Analytics setup includes:</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="text-slate-600 mr-2">•</span>
                GA4 configuration with custom event tracking
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 mr-2">•</span>
                Looker Studio dashboards with real-time data
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 mr-2">•</span>
                Monthly strategy calls with actionable insights
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <p className="text-slate-600 mb-6">
        All Imaginry Space clients get dedicated account management and transparent project tracking through our client portal.
      </p>
      <a 
        href="#contact" 
        className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow"
      >
        Start a Project
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Header */}
    <div className="max-w-2xl mb-16">
      <h2 className="text-4xl font-light text-slate-900 mb-4">
        What Our Clients Say
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed">
        Real feedback from marketing teams who've partnered with Imaginry Space to elevate their brand presence and campaign performance.
      </p>
    </div>

    {/* Side-by-Side Comparison Layout */}
    <div className="grid lg:grid-cols-2 gap-12 mb-12">
      {/* Left Side - Featured Testimonial */}
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
        <div className="flex items-start gap-6 mb-8">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
            alt="Jessica Martinez"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-slate-100"
          />
          <div>
            <h3 className="text-lg font-medium text-slate-900">Jessica Martinez</h3>
            <p className="text-sm text-slate-500">VP of Marketing, Cascade Ventures</p>
          </div>
        </div>
        <svg className="w-8 h-8 text-slate-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          Imaginry Space completely reimagined our product launch campaign. Their creative direction for our SaaS rebrand resulted in a 43% increase in qualified demo requests within the first month. The team understood our B2B audience and delivered messaging that actually resonated.
        </p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Right Side - Two Stacked Testimonials */}
      <div className="space-y-8">
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              alt="Michael Chen"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white"
            />
            <div>
              <h3 className="font-medium text-slate-900">Michael Chen</h3>
              <p className="text-sm text-slate-500">Creative Director, Bloom Digital</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed">
            We brought Imaginry Space in to refresh our client pitch decks and case study templates. Their design system approach saved our team roughly 8 hours per week on presentation prep, and our close rate improved noticeably. The templates are flexible enough for different industries but maintain brand consistency.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
              alt="Rachel Foster"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white"
            />
            <div>
              <h3 className="font-medium text-slate-900">Rachel Foster</h3>
              <p className="text-sm text-slate-500">Head of Content, Meridian Health</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed">
            The social media content strategy Imaginry Space developed for our healthcare brand struck the perfect balance between professional and approachable. Engagement on LinkedIn increased by 67%, and we're finally seeing consistent lead generation from organic social. Their understanding of healthcare compliance was impressive.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center pt-8">
      <p className="text-slate-600 mb-6">Join 200+ marketing teams who trust Imaginry Space</p>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow"
      >
        Start Your Project
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-4xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-light text-slate-800 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-lg text-slate-600 font-light">
        Everything you need to elevate your marketing presence
      </p>
    </div>

    {/* Pricing Card */}
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden max-w-2xl mx-auto">
      {/* Card Header */}
      <div className="bg-gradient-to-br from-slate-50 to-white px-8 py-10 border-b border-slate-100">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="text-2xl font-medium text-slate-800">Professional Plan</h3>
          <div className="text-right">
            <div className="flex items-baseline">
              <span className="text-5xl font-light text-slate-900">$79</span>
              <span className="text-slate-500 ml-2 font-light">/month</span>
            </div>
          </div>
        </div>
        <p className="text-slate-600 font-light">For growing marketing teams</p>
      </div>

      {/* Features List */}
      <div className="px-8 py-10">
        <ul className="space-y-5 mb-10">
          <li className="flex items-start group">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-slate-700 font-light">Unlimited campaign management with Imaginry Space</span>
          </li>
          <li className="flex items-start group">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-slate-700 font-light">Advanced analytics and performance tracking</span>
          </li>
          <li className="flex items-start group">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-slate-700 font-light">AI-powered content suggestions and optimization</span>
          </li>
          <li className="flex items-start group">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-slate-700 font-light">Multi-channel integration (social, email, web)</span>
          </li>
          <li className="flex items-start group">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-slate-700 font-light">Collaborative workspace for team members</span>
          </li>
          <li className="flex items-start group">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-slate-700 font-light">Priority support and onboarding assistance</span>
          </li>
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-light py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-md mb-6"
        >
          Get Started with Imaginry Space
        </button>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span className="font-light">Secure Payment</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-light">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Note */}
    <p className="text-center text-slate-500 text-sm mt-8 font-light">
      All plans include a 14-day free trial. No credit card required.
    </p>
  </div>
</section>
      
      {/* Contact Form - Supabase Integration */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-2xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-light text-slate-900 mb-4">
        Let's Create Something Extraordinary
      </h2>
      <p className="text-lg text-slate-600 max-w-xl mx-auto">
        Ready to transform your marketing vision? Share your details and we'll craft a personalized strategy for your brand.
      </p>
    </div>

    {/* Form Card */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 transition-all duration-300 hover:shadow-md">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
          const messageDiv = form.querySelector('#form-message') as HTMLDivElement;
          
          // Disable submit button
          submitButton.disabled = true;
          submitButton.textContent = 'Sending...';
          
          try {
            const formData = new FormData(form);
            const data = {
              name: formData.get('name') as string,
              email: formData.get('email') as string,
              phone: formData.get('phone') as string,
              company: formData.get('company') as string,
              budget: formData.get('budget') as string,
              message: formData.get('message') as string,
              industry: 'Marketing',
              source: 'Imaginry Space Contact Form'
            };

            const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
            });

            if (!response.ok) throw new Error('Submission failed');

            // Success
            messageDiv.className = 'mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center';
            messageDiv.textContent = '✓ Thank you! We\'ll be in touch within 24 hours.';
            form.reset();
            
          } catch (error) {
            // Error
            messageDiv.className = 'mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center';
            messageDiv.textContent = '✗ Something went wrong. Please try again or email us directly.';
          } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Start Your Journey';
          }
        }}
        className="space-y-6"
      >
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Smith"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@company.com"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
            />
          </div>
        </div>

        {/* Phone & Company Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your Company"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
            />
          </div>
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
            Marketing Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
          >
            <option value="">Select a range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-plus">$100,000+</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Share your marketing goals, challenges, or any specific services you're interested in..."
            className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-4 px-8 rounded-lg font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Start Your Journey
        </button>

        {/* Message Display */}
        <div id="form-message" className="hidden"></div>

        {/* Privacy Note */}
        <p className="text-xs text-slate-500 text-center mt-4">
          By submitting this form, you agree to our privacy policy. We respect your data and will never share it with third parties.
        </p>
      </form>
    </div>

    {/* Trust Indicators */}
    <div className="mt-12 text-center">
      <div className="flex items-center justify-center gap-8 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>24-hour response</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Secure & confidential</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>No spam, ever</span>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-slate-50 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
      {/* Left: CTA/Newsletter */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
            Imaginry Space
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Strategic marketing that transforms brands into memorable experiences. Let's create something extraordinary together.
          </p>
        </div>
        
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-900 uppercase tracking-wide">
            Monthly Insights
          </h4>
          <p className="text-sm text-slate-600">
            Brand strategy, campaign breakdowns, and marketing trends delivered to your inbox.
          </p>
          <form className="flex gap-2 mt-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-300"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all duration-300 hover:shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="pt-4 space-y-2 text-sm text-slate-600">
          <p>
            <a href="mailto:hello@imaginryspace.com" className="hover:text-slate-900 transition-colors duration-300">
              hello@imaginryspace.com
            </a>
          </p>
          <p>
            <a href="tel:+14155551234" className="hover:text-slate-900 transition-colors duration-300">
              +1 (415) 555-1234
            </a>
          </p>
          <p className="text-slate-500">
            San Francisco, CA
          </p>
        </div>
      </div>

      {/* Right: Navigation Links */}
      <div className="grid grid-cols-2 gap-8 lg:gap-12">
        <div>
          <h4 className="text-sm font-medium text-slate-900 uppercase tracking-wide mb-4">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/brand-strategy" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Brand Strategy
              </a>
            </li>
            <li>
              <a href="/content-marketing" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Content Marketing
              </a>
            </li>
            <li>
              <a href="/campaign-development" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Campaign Development
              </a>
            </li>
            <li>
              <a href="/digital-advertising" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Digital Advertising
              </a>
            </li>
            <li>
              <a href="/analytics" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Analytics & Insights
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-slate-900 uppercase tracking-wide mb-4">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/work" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Our Work
              </a>
            </li>
            <li>
              <a href="/approach" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Approach
              </a>
            </li>
            <li>
              <a href="/team" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Team
              </a>
            </li>
            <li>
              <a href="/insights" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Insights
              </a>
            </li>
            <li>
              <a href="/careers" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Imaginry Space. All rights reserved.
      </p>
      
      <div className="flex items-center gap-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-900 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-900 transition-colors duration-300"
          aria-label="Twitter"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-900 transition-colors duration-300"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}