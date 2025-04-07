import React from "react";
import resumeIllustration from "../assets/resumeIllustration.jpg"

function HeroSection() {
  return (
    <section className="bg-gray-50 pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Build Your Resume <br className="hidden sm:block" /> in Just Minutes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Create a professional, ATS-friendly resume with ease. No sign-up needed!
          </p>
          <button
            className="bg-red-500 text-black text-xl px-4 py-3 mx-2 hover:bg-blue-500"
            style={{ borderRadius: "8px" }}
          >
            Build Resume
          </button>
        </div>

        {/* Right Image or Illustration */}
        <div className="w-full md:w-1/2">
          <img
            src={resumeIllustration}
            alt="Resume Builder"
            className="w-full rounded-4xl max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Testimonials */}

      <div className="mt-20 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
          What Users Say
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
          <TestimonialCard
            text="This site made resume building a breeze. Got hired in a week!"
            author="— Bipul Rai"
          />
          <TestimonialCard
            text="Super clean UI and love that it's ATS-optimized."
            author="— Sunny Raj"
          />
          <TestimonialCard
            text="Highly recommend to all freshers and students. Easy and fast."
            author="— Anurag raj"
          />
        </div>

      </div>
    </section>
  );
}

const TestimonialCard = ({ text, author }) => (
  <div className="bg-white shadow-md p-6 rounded-lg max-w-xs w-full">
    <p className="text-gray-700 italic">“{text}”</p>
    <div className="mt-4 font-bold text-gray-900">{author}</div>
  </div>
);

export default HeroSection;
