import { useEffect, useState } from "react";
import {
  CEO_SPEECH,
  GRADUATION1,
  STUDENTS,
  CEO1,
  CE02,
  CLASSROOM,
  GATE,
  GRADUATE1,
  GRADUATE2,
  GRADUATE3,
  GRADUATE4,
  GRADUATE5,
  GRADUATE6,
  GRADUATE7,
  GRADUATE8,
  GRADUATE9,
  GRADUATE10,
  G_FAMILY,
  GRADUATES1,
  GRADUATES2,
  GRADUATES3,
  GRAD1,
  GRAD2,
  GRAD3,
  GRAD4,
  GRADS1,
  CEO_NEW,
  OFFICE,
} from "../assets/images/index.js";

import { ArrowRight, ArrowLeft } from "lucide-react";
export default function SuccessStories() {
  const slides = [
    {
      img: STUDENTS,
      title: "Celebrating Achievement",
      desc: "Hundreds of students graduate each year, ready to start their tech careers",
      tag: "Graduation Day",
    },
    {
      img: GRAD1,
      title: "Certificates of Achievement",
      desc: "Every graduate receives a certificate that opens doors to opportunities",
      tag: "Certification",
    },
    {
      img: CLASSROOM,
      title: "NaphTech qualified labs",
      desc: "Every graduate receives a certificate that opens doors to opportunities",
      tag: "Certification",
    },
    {
      img: GRAD2,
      title: "Certificates of Achievement",
      desc: "Every graduate receives a certificate that opens doors to opportunities",
      tag: "Certification",
    },
    {
      img: GRAD3,
      title: "Proud to be graduated",
      desc: "Every graduate receives a certificate that opens doors to opportunities",
      tag: "Certification",
    },
    {
      img: GRAD4,
      title: "Ready to land by dream job",
      desc: "Every graduate receives a certificate that opens doors to opportunities",
      tag: "Certification",
    },

    {
      img: GRADUATION1,
      title: "Happy graduate's family",
      desc: "Our graduates receive nationally recognized TVET certifications",
      tag: "Certified Success",
    },
    {
      img: GRADUATES3,
      title: "Together We Rise",
      desc: "Students from all backgrounds united by the pursuit of knowledge",
      tag: "Community",
    },
    {
      img: GRADUATES2,
      title: "Quality education for community",
      desc: "Every graduate receives a certificate that opens doors to opportunities",
      tag: "Certification",
    },
    {
      img: OFFICE,
      title: "NaphTech Attractive classes",
      desc: "Every graduate receives a certificate that opens doors to opportunities",
      tag: "Certification",
    },
  ];

  const [index, setIndex] = useState(0);

  // 👉 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 👉 Controls
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-b from-[#F8FAFC] to-white"
      id="success"
    >
      {/* <!-- Section Header --> */}
      <div className="text-center mb-12">
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
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            ></path>
          </svg>
          <span className="text-sm font-semibold">Success Stories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4 leading-tight font-heading">
          Celebrating
          <span className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent px-3">
            Our Success
          </span>
        </h2>
        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
          From graduation ceremonies to student achievements — see the moments
          that define Naphtech College
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        {/* Carousel */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 relative group font-heading"
              >
                <div className="relative aspect-[21/9] lg:aspect-[25/9] overflow-hidden">
                  {/* Image with animation */}
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${
                      index === i ? "scale-110" : "scale-100"
                    }`}
                  />

                  {/* Overlay */}
                  <div className="hidden absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 max-sm:p-1 p-3 lg:p-10 text-white">
                    {/* <span
                      className="bg-white/20 px-4 py-2 max-sm:py-[1px]
                      rounded-full text-sm max-sm:text-xs backdrop-blur"
                    >
                      {slide.tag}
                    </span> */}
                    <h3 className="text-lg lg:text-4xl font-bold mt-3 max-sm:mt-1  ">
                      {slide.title}
                    </h3>
                    {/* <p className="text-white/80 mt-2 max-sm:mt-1 max-w-xl">
                      {slide.desc}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute text-center left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0757c738] rounded-full shadow hover:scale-110 transition"
          >
            <ArrowLeft className="mx-auto" color="white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute text-center right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0757c738] rounded-full shadow hover:scale-110 transition"
          >
            <ArrowRight className="mx-auto" color="white" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  index === i ? "bg-blue-600 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
