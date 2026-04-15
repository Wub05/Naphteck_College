import { useState } from "react";
import {
  Award,
  Code2,
  FileSpreadsheet,
  Languages,
  Sparkles,
  Smartphone,
  Database,
  Briefcase,
} from "lucide-react";

export default function ServicesSection() {
  const [activeProgram, setActiveProgram] = useState(null);

  const programs = [
    {
      title: "COC Training",
      desc: "TVET Certificate of Competency — National certification recognized across Ethiopia",
      color: "from-[#1E3A8A] to-[#2563EB]",
      tag: "POPULAR",
      icon: Award,
      details:
        "Prepare for national COC exams with hands-on training. Get certified and boost your career opportunities in Ethiopia.",
      duration: "1–3 Months",
      level: "All Levels",
    },
    {
      title: "Full-Stack Programming",
      desc: "Master frontend & backend — HTML, CSS, JavaScript, React, Node.js",
      color: "from-[#3B82F6] to-[#1E3A8A]",
      icon: Code2,
      details:
        "Learn to build real-world web applications using modern technologies and frameworks.",
      duration: "2 Months",
      level: "Beginner to Advanced",
    },
    {
      title: "Excel & Office Skills",
      desc: "Microsoft Excel, Word, PowerPoint — essential skills for any career",
      color: "from-[#10B981] to-[#059669]",
      icon: FileSpreadsheet,
      details:
        "Gain practical office skills used in every professional environment.",
      duration: "1 Month",
      level: "Beginner",
    },
    {
      title: "English Language",
      desc: "Spoken, Business & Academic English for all levels",
      color: "from-[#F59E0B] to-[#D97706]",
      icon: Languages,
      details:
        "Improve communication skills for education, work, and international opportunities.",
      duration: "Flexible",
      level: "All Levels",
    },
    {
      title: "AI & Prompt Engineering",
      desc: "Learn ChatGPT, Midjourney & modern AI tools",
      color: "from-[#8B5CF6] to-[#7C3AED]",
      icon: Sparkles,
      details:
        "Master AI tools and prompt engineering to boost productivity and career growth.",
      duration: "1 Month",
      level: "Beginner",
    },
    {
      title: "Mobile App Development",
      desc: "Build iOS & Android apps with React Native & Flutter",
      color: "from-[#EC4899] to-[#DB2777]",
      icon: Smartphone,
      details:
        "Create real mobile applications and publish them to app stores.",
      duration: "2 Months",
      level: "Intermediate",
    },
    {
      title: "Backend & Databases",
      desc: "Python, PHP, MySQL, MongoDB — server-side essentials",
      color: "from-[#06B6D4] to-[#0891B2]",
      icon: Database,
      details:
        "Learn APIs, databases, and backend architecture for scalable systems.",
      duration: "2 Months",
      level: "Intermediate",
    },
    {
      title: "Professional Skills",
      desc: "CV writing, interview prep & career guidance",
      color: "from-[#EF4444] to-[#DC2626]",
      icon: Briefcase,
      details:
        "Prepare for jobs with real-world career support and soft skills training.",
      duration: "2 Weeks",
      level: "All Levels",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-white to-[#F8FAFC] py-16 lg:py-24"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white rounded-full px-5 py-2 mb-6 shadow-lg">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
            All{" "}
            <span className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent">
              Naphtech Services
            </span>
          </h2>

          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            From professional programming to office skills and language training
            — everything you need to succeed
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <div
              key={i}
              onClick={() => setActiveProgram(program)}
              className="relative cursor-pointer group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* TAG */}
              {program.tag && (
                <div className="absolute top-0 right-0 bg-[#1E3A8A] text-white text-xs px-3 py-1 rounded-bl-xl">
                  {program.tag}
                </div>
              )}

              {/* ICON */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl mb-4 flex items-center justify-center text-white group-hover:scale-110 transition`}
              >
                <program.icon size={26} />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-700">
                {program.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm mb-4">{program.desc}</p>

              {/* CTA */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-semibold text-blue-600">
                  View Program
                </span>
                <span className="text-blue-600 group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- Bottom Stats Banner --> */}
        <div className="mt-12 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-2xl p-8 lg:p-10 text-white">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-1">8+</div>
              <div className="text-white/80 text-sm">
                4<br />
                ​Training Programs
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-1">500+</div>
              <div className="text-white/80 text-sm">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-1">95%</div>
              <div className="text-white/80 text-sm">
                Certification Pass Rate
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-1">1</div>
              <div className="text-white/80 text-sm">Campuses</div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeProgram && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative animate-fade-in">
            {/* CLOSE */}
            <button
              onClick={() => setActiveProgram(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* CONTENT */}
            <h2 className="text-2xl font-bold mb-3">{activeProgram.title}</h2>

            <p className="text-gray-600 mb-4">{activeProgram.details}</p>

            <div className="flex gap-4 text-sm text-gray-500 mb-6">
              <span>⏱ {activeProgram.duration}</span>
              <span>📊 {activeProgram.level}</span>
            </div>

            {/* CTA */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
              <a href="#contact" onClick={() => setActiveProgram(null)}>
                Contact us for more
              </a>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
