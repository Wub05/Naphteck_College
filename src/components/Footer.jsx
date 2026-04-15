import LOGO from "../assets/images/logo_footer.png";
import { PhoneCallIcon, Send } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer
        id="global-footer"
        className="code-section bg-[#0F172A] pt-16 lg:pt-20 pb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Main Footer Content -->  */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
            {/* <!-- Column 1: About --> */}
            <div className="sm:col-span-2 lg:col-span-1">
              {/* Logo */}
              <div className="bg-white rounded-full inline-block">
                <a href="/" data-logo="">
                  <img
                    src={LOGO}
                    alt="Naphtech College Logo"
                    className="h-16 lg:h-[70px] w-auto block"
                  />
                </a>
              </div>
              <p className="text-[#9CA3AF] mb-6 leading-relaxed">
                Naphtech Computer and COC Training Center — Empowering future
                tech professionals with practical skills and industry-recognized
                certifications.
              </p>
              {/* <!-- Social Links --> */}
              <div className="flex items-center gap-4">
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

            {/* <!-- Column 2: Quick Links --> */}
            <div>
              <h4 className="text-white font-bold text-lg mb-5">Programs</h4>
              <ul className="space-y-3">
                <li>
                  <a className="text-[#9CA3AF] hover:text-white transition-colors duration-200">
                    Nursing
                  </a>
                </li>
                <li>
                  <a className="text-[#9CA3AF] hover:text-white transition-colors duration-200">
                    Full-Stack Development
                  </a>
                </li>
                <li>
                  <a className="text-[#9CA3AF] hover:text-white transition-colors duration-200">
                    Frontend Development
                  </a>
                </li>
                <li>
                  <a className="text-[#9CA3AF] hover:text-white transition-colors duration-200">
                    AI &amp; Prompt Engineering
                  </a>
                </li>
                <li>
                  <a className="text-[#9CA3AF] hover:text-white transition-colors duration-200">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a className="text-[#9CA3AF] hover:text-white transition-colors duration-200">
                    COC Training
                  </a>
                </li>
                <li>
                  <a className="text-[#9CA3AF] hover:text-white transition-colors duration-200">
                    English Programs
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 3: Company --> */}
            <div>
              <h4 className="text-white font-bold text-lg mb-5">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#healthcare"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Degree program
                  </a>
                </li>
                <li>
                  <a
                    href="#choose_us"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#success"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#training"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Trainings
                  </a>
                </li>

                <li>
                  <a
                    href="#faq"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 4: Contact --> */}
            <div>
              <h4 className="text-white font-bold text-lg mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5"
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
                  <div className="text-[#9CA3AF]">
                    <span className="text-white font-medium">
                      Bale Robe Campus
                    </span>
                    <br />
                    Bale Robe, Oromia, Ethiopia
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#3B82F6] flex-shrink-0"
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
                  <a className="text-[#9CA3AF] hover:text-white transition-colors duration-200">
                    Naphtechcollege@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 font-heading">
                  <div className="flex ">
                    <a className="mr-3">
                      <PhoneCallIcon color="#3B82F6" />
                    </a>
                    <a
                      href="mailto:info@naphtechcollege.com"
                      className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                    >
                      <p>09 30 21 06 59</p>
                      <p>09 19 55 20 01</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Bottom Bar --> */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#6B7280] text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Naphtech College. All rights
              reserved.
            </p>
            {/* <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-[#6B7280] hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#6B7280] hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
