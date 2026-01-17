import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header with Logo */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-1">
            {/* Logo on the left */}
            <div className="flex items-center">
              <img
                src="/DiLomlogo.png"
                alt="DiLom Websites Logo"
                className="h-24 md:h-32 w-auto object-contain"
              />
            </div>

            {/* Navigation items in center */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-[#008080] dark:hover:text-[#008080] font-medium transition-colors">
                Home
              </a>
              <a href="#packages" className="text-gray-700 dark:text-gray-300 hover:text-[#008080] dark:hover:text-[#008080] font-medium transition-colors">
                Package
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-[#008080] dark:hover:text-[#008080] font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-[#008080] dark:hover:text-[#008080] font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* Dark mode toggle on the right */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative px-4 py-16 md:py-24 lg:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#008080] dark:text-[#008080] tracking-tight mb-4">
              DiLom Websites
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              Professional Web Design
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Transform your business presence with expertly crafted websites designed to elevate your brand and drive results
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#packages"
                className="inline-block px-8 py-4 bg-[#008080] text-white rounded-xl font-semibold text-lg hover:bg-[#006666] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Package →
              </a>
              <Link
                href="/example-1"
                className="inline-block px-8 py-4 bg-transparent border-2 border-[#008080] text-[#008080] dark:text-[#008080] rounded-xl font-semibold text-lg hover:bg-[#008080] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Example →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section id="packages" className="relative px-4 py-16 md:py-24 lg:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Our Package
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Get everything you need for your professional website
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-6 lg:gap-8 max-w-3xl mx-auto mb-20">
            {/* Package */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-[#008080] transform hover:-translate-y-1">
              <div className="relative p-8 lg:p-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Website Package</h3>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold text-gray-900 dark:text-white">$700</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">One-time payment • Accept CashApp, PayPal, and Venmo</p>
                </div>

                <ul className="space-y-4 mb-10 text-left">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#008080] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-base">1–10 pages (Home, About, Contact)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#008080] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-base">Custom design tailored to your brand</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#008080] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-base">Mobile-friendly and responsive</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#008080] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-base">Basic SEO setup (meta tags, keywords)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#008080] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-base">Simple contact form</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#008080] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-base">Branding with your colors and fonts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#008080] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-base">Testimonials or client reviews section</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#008080] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-base">Custom domain setup included</span>
                  </li>
                </ul>

                <Link
                  href="/example-1"
                  className="block w-full py-4 px-6 bg-[#008080] text-white rounded-xl font-semibold text-base hover:bg-[#006666] transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  View Example →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="px-4 py-20 bg-white dark:bg-gray-800 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver high-quality websites that help your business stand out online
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 hover:border-[#008080] transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-[#008080]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Fast Turnaround</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Get your website up and running quickly with our streamlined development process
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 hover:border-[#008080] transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-[#008080]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Mobile Responsive</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Every website is fully optimized for all devices - desktop, tablet, and mobile
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 hover:border-[#008080] transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-[#008080]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Built with best practices for security, performance, and reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our simple process gets your website live in no time
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#008080] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Reach out via phone or email to discuss your project needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#008080] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Choose Package</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Select the package that fits your business needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#008080] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">We Build</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team creates your custom website based on your requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#008080] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Launch</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your website goes live and you start attracting customers online
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 bg-white dark:bg-gray-800 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-10 md:p-14 border border-gray-200 dark:border-gray-600 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Ready to get started on your website? Reach out to us today.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[#008080] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Email</p>
                  <a href="mailto:diegolomelin2@gmail.com" className="text-lg text-gray-900 dark:text-white hover:text-[#008080] dark:hover:text-[#008080] transition-colors font-semibold">
                    diegolomelin2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[#008080] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Phone</p>
                  <a href="tel:571-546-8795" className="text-lg text-gray-900 dark:text-white hover:text-[#008080] dark:hover:text-[#008080] transition-colors font-semibold">
                    571-546-8795
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}