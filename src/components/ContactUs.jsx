import { Send } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <section
        className="code-section relative py-16 lg:py-24 overflow-hidden"
        id="contact"
      >
        {/* <!-- Background --> */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3B82F6]/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white rounded-full px-5 py-2 mb-6 shadow-lg shadow-[#3B82F6]/20">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span className="text-sm font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4 leading-tight font-heading">
              Let's Start Your
              <span className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent pl-2 lg:pl-3">
                Learning Journey
              </span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12  translate-y-12 transition-all duration-700 ease-out">
            {/* <!-- Contact Form --> */}
            <div className="lg:col-span-3">
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-[#1E3A8A]/5 border border-[#1E3A8A]">
                {/* <!-- Decorative Elements --> */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#1E3A8A]/10 to-[#3B82F6]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F2937]">
                      Send us a Message
                    </h3>
                  </div>

                  <form
                    data-landingsite-contact-form=""
                    className="space-y-5"
                    data-ls-rendered-at="1775571526926"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="relative group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required=""
                          className="peer w-full px-4 pt-6 pb-2 bg-[#F8FAFC] border-2 border-gray-100 rounded-xl text-[#1F2937] placeholder-transparent focus:border-[#3B82F6] focus:bg-white focus:shadow-lg focus:shadow-[#3B82F6]/10 outline-none transition-all duration-300"
                          placeholder="Full Name"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-4 top-3 text-sm text-[#9CA3AF] transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#3B82F6] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-sm"
                        >
                          Full Name
                        </label>
                      </div>

                      <div className="relative group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required=""
                          className="peer w-full px-4 pt-6 pb-2 bg-[#F8FAFC] border-2 border-gray-100 rounded-xl text-[#1F2937] placeholder-transparent focus:border-[#3B82F6] focus:bg-white focus:shadow-lg focus:shadow-[#3B82F6]/10 outline-none transition-all duration-300"
                          placeholder="Email Address"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-4 top-3 text-sm text-[#9CA3AF] transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#3B82F6] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-sm"
                        >
                          Email Address
                        </label>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="relative group">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="peer w-full px-4 pt-6 pb-2 bg-[#F8FAFC] border-2 border-gray-100 rounded-xl text-[#1F2937] placeholder-transparent focus:border-[#3B82F6] focus:bg-white focus:shadow-lg focus:shadow-[#3B82F6]/10 outline-none transition-all duration-300"
                          placeholder="Phone Number"
                        />
                        <label
                          htmlFor="phone"
                          className="absolute left-4 top-3 text-sm text-[#9CA3AF] transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#3B82F6] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-sm"
                        >
                          Phone Number
                        </label>
                      </div>

                      <div className="relative group">
                        <select
                          id="program"
                          name="program"
                          className="peer w-full px-4 pt-6 pb-2 bg-[#F8FAFC] border-2 border-gray-100 rounded-xl text-[#1F2937] focus:border-[#3B82F6] focus:bg-white focus:shadow-lg focus:shadow-[#3B82F6]/10 outline-none transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="">Select a program</option>
                          <option value="full-stack">
                            Full-Stack Development
                          </option>
                          <option value="frontend">Frontend Development</option>
                          <option value="ai">
                            AI &amp; Prompt Engineering
                          </option>
                          <option value="mobile">Mobile App Development</option>
                          <option value="coc">COC Training</option>
                          <option value="english">
                            English Language Programs
                          </option>
                          <option value="nursing">Nursing</option>
                          <option value="pharmacy">Pharmacy</option>
                          <option value="other">Other</option>
                        </select>

                        <svg
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF] pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required=""
                        className="peer w-full px-4 pt-6 pb-2 bg-[#F8FAFC] border-2 border-gray-100 rounded-xl text-[#1F2937] placeholder-transparent focus:border-[#3B82F6] focus:bg-white focus:shadow-lg focus:shadow-[#3B82F6]/10 outline-none transition-all duration-300 resize-none"
                        placeholder="Your Message"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-4 top-3 text-sm text-[#9CA3AF] transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#3B82F6] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-sm"
                      >
                        Your Message
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#1E40AF] hover:to-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/40 hover:-translate-y-0.5 flex items-center justify-center gap-3 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <span>Send Message</span>
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]  group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* <!-- Contact Info --> */}
            <div className="lg:col-span-2 space-y-6">
              {/* <!-- Bale Robe Campus --> */}
              <div className="group relative bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-2xl p-6 text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#1E3A8A]/30 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-0.5">
                        Bale Robe Campus
                      </h3>
                      <p className="text-white/70 text-sm">Main Campus</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-3 pl-[4.5rem]">
                    Bale Robe, Oromia Region
                    <br />
                    Ethiopia
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-sm pl-[4.5rem]">
                    <svg
                      className="w-4 h-4"
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
                    <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* <!-- Quick Contact --> */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="mailto:Naphtechcollege@gmail.com"
                  className="group flex flex-col items-center gap-3 p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-[#3B82F6] hover:shadow-xl hover:shadow-[#3B82F6]/10 transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6]/10 to-[#3B82F6]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-[#3B82F6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280]">Email</div>
                    <div className="text-sm font-medium text-[#1F2937]"></div>
                  </div>
                </a>

                <a
                  href="tel:+251930210659"
                  className="group flex flex-col items-center gap-3 p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-[#10B981] hover:shadow-xl hover:shadow-[#10B981]/10 transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-[#10B981]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280]">Call Now</div>
                    <div className="text-sm font-medium text-[#1F2937]"></div>
                  </div>
                </a>
              </div>

              {/* <!-- Social Links --> */}
              <div className="bg-gradient-to-br from-[#1F2937] to-[#0F172A] rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span>Follow Us</span>
                  <span className="w-8 h-0.5 bg-gradient-to-r from-[#3B82F6] to-transparent"></span>
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/g/1RSudDjwLw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@naphtechcomputertraining"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#862c05] rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.75 2h3.25c.2 1.7 1.3 3.3 3 3.9v3.4c-1.2-.1-2.4-.5-3.4-1.2v6.3c0 3.5-2.9 6.3-6.4 6.3-3.5 0-6.4-2.8-6.4-6.3 0-3.5 2.9-6.3 6.4-6.3.3 0 .7 0 1 .1v3.4c-.3-.1-.6-.2-1-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V2z" />
                    </svg>
                  </a>

                  <a
                    href="https://t.me/Naphtechcollege"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
