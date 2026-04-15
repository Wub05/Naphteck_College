import healthcareImg from "../assets/images/healthcareImg.jpg";
import { HeartPulse, Stethoscope, Pill, GraduationCap } from "lucide-react";

export default function Healthcare() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="healthcare">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-2xl rounded-2xl"></div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={healthcareImg}
                alt="Healthcare students training"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <HeartPulse className="w-4 h-4" />
              <span className="text-sm font-semibold">Healthcare Programs</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight font-heading">
              Degree programs in Nursing & Pharmacy
              <span className="block text-green-600 pt-3">
                Build a Career in Healthcare
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-6">
              We offer comprehensive healthcare education programs designed to
              prepare students for real-world medical and clinical environments.
            </p>

            {/* PROGRAM CARDS */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {/* Nursing */}
              <div className="bg-green-50 p-4 rounded-xl border border-green-100 hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <Stethoscope className="text-green-600" />
                  <h3 className="font-semibold text-gray-800">
                    Nursing Degree
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Hands-on clinical training and patient care experience.
                </p>
              </div>

              {/* Pharmacy */}
              <div className="bg-green-50 p-4 rounded-xl border border-green-100 hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <Pill className="text-green-600" />
                  <h3 className="font-semibold text-gray-800">
                    Pharmacy Program
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Learn medication management, dispensing, and pharmaceutical
                  sciences.
                </p>
              </div>
            </div>

            {/* FEATURES */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-green-600 mt-1" />
                <p className="text-gray-700">
                  Accredited and career-focused programs
                </p>
              </div>

              <div className="flex items-start gap-3">
                <HeartPulse className="text-green-600 mt-1" />
                <p className="text-gray-700">
                  Practical training with real-world experience
                </p>
              </div>
            </div>

            {/* CTA */}
            <p className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 text-center">
              Join us for Healthcare Degree Programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
