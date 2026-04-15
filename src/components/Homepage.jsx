export default function HomePage() {
  return (
    <>
      <section
        className="code-section relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A] pt-16 lg:pt-20"
        id="s0z49z"
      >
        {/* <!-- Background Image with Overlay --> */}
        <div className="absolute inset-0">
          <img
            src="https://assets.ls-assets.com/provider/istock/2191244801.jpg?w=1920"
            alt="Tech Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A]/90 to-[#1E3A8A]/50"></div>
        </div>

        <div className="absolute top-32 right-16 hidden lg:block bounce-slow">
          <div className="bg-[#06B6D4]/20 backdrop-blur-sm border border-[#06B6D4]/30 rounded-lg p-4 text-[#06B6D4] font-mono text-sm">
            <div>certification</div>
            <div className="text-[#60A5FA]">✅ Ready</div>
          </div>
        </div>
        <div className="absolute bottom-32 left-20 hidden lg:block bounce-slow">
          <div className="bg-[#3B82F6]/30 backdrop-blur-sm border border-[#3B82F6]/30 rounded-lg p-4 text-white font-mono text-sm">
            <div className="text-[#60A5FA]">// Build your</div>
            <div className="text-[#06B6D4]">future</div>
          </div>
        </div>

        {/* <!-- Content --> */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/50 backdrop-blur-sm border border-[#3B82F6]/30 rounded-full px-4 py-2 max-sm:mt-14 mb-8">
            <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></span>
            <span className="text-[#60A5FA] text-sm font-medium">
              Now Enrolling for{" "}
              <span className="text-white font-heading">
                {new Date().getFullYear()}
              </span>{" "}
              Programs
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight font-heading">
            Build Your Future in Tech & Healthcare with
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#60A5FA] bg-clip-text text-transparent px-2 lg:px-4">
              Practical Skills
            </span>
            That Get You Hired
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-[#9CA3AF] max-w-3xl mx-auto mb-10 leading-relaxed">
            Join Naphtech College for hands-on training in software development,
            AI, and professional certification. Transform your career in just
            months.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#contact"
              className="group relative bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#3B82F6]/40 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Journey
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </span>
            </a>
          </div>

          {/* <!-- Trust Indicators --> */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[#9CA3AF]">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#3B82F6]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Industry Certifications</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#3B82F6]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>Project-Based Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#3B82F6]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Career Support</span>
            </div>
          </div>
        </div>

        {/* <!-- Bottom Wave --> */}
        <div className="absolute bottom-0 left-0 right-0 ">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F0F4FF"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
