import React from "react";

export default function WhyUs() {
  return (
    <>
      <section
        className="code-section bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A] py-16 lg:py-24 relative overflow-hidden"
        id="choose_us"
      >
        {/* <!-- Background Pattern --> */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-dots"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-[#60A5FA] text-sm font-semibold">
                Why Naphtech
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight font-heading">
              Why Choose{" "}
              <span className="text-[#3B82F6]">Naphtech College</span>?
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              We don't just teach — we transform careers with practical,
              industry-focused training
            </p>
          </div>

          {/* <!-- Features Grid --> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 scroll-reveal  translate-y-12 transition-all duration-700 ease-out">
            {/* <!-- Feature 1 --> */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLineCap="round"
                    strokeLineJoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Project-Based Learning
              </h3>
              <p className="text-[#9CA3AF]">
                Build real projects that demonstrate your skills to employers
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#06B6D4]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Short-Term Certification
              </h3>
              <p className="text-[#9CA3AF]">
                Get certified in months, not years. Start your career faster
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#10B981]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Real-World Skills
              </h3>
              <p className="text-[#9CA3AF]">
                Learn technologies and practices used in actual industry
                settings
              </p>
            </div>

            {/* <!-- Feature 4 --> */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#F59E0B]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLineCap="round"
                    strokeLineJoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Career-Focused Training
              </h3>
              <p className="text-[#9CA3AF]">
                Curriculum designed for job placement and career advancement
              </p>
            </div>
          </div>

          {/* <!-- Additional Info Banner --> */}
          <div className="mt-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Community Outreach
                </h3>
                <p className="text-[#9CA3AF] mb-0">
                  Serving students across Bale Robe and Bale Goba with
                  accessible technology education and training programs.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3B82F6] mb-1">
                    1
                  </div>
                  <div className="text-sm text-[#9CA3AF]">Campus Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#06B6D4] mb-1">
                    100%
                  </div>
                  <div className="text-sm text-[#9CA3AF]">Practical Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
