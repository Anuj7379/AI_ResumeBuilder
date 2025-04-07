import React from "react";
import {
  FaFileAlt,
  FaRocket,
  FaUserShield,
  FaDownload,
  FaMagic,
  FaLaptopCode,
  FaCheckCircle,
  FaCloudUploadAlt,
} from "react-icons/fa";

function FeaturesSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Powerful Features to Get You Hired
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Build your resume quickly and easily with features designed to help you stand out and get shortlisted.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <FeatureCard
            Icon={FaFileAlt}
            title="Professional Templates"
            desc="Choose from modern, ATS-friendly templates for all industries."
          />
          {/* Feature 2 */}
          <FeatureCard
            Icon={FaRocket}
            title="Fast & Easy"
            desc="Build your resume in minutes with an intuitive guided builder."
          />
          {/* Feature 3 */}
          <FeatureCard
            Icon={FaUserShield}
            title="Privacy First"
            desc="No data is stored. Everything stays on your device, secure and private."
          />
          {/* Feature 4 */}
          <FeatureCard
            Icon={FaDownload}
            title="1-Click PDF Download"
            desc="Export your resume instantly as a polished PDF, no signup required."
          />
          {/* Feature 5 */}
          <FeatureCard
            Icon={FaMagic}
            title="AI Suggestions"
            desc="Get smart suggestions for skills, achievements, and job summaries."
          />
          {/* Feature 6 */}
          <FeatureCard
            Icon={FaLaptopCode}
            title="Developer Friendly"
            desc="Perfect for tech resumes with sections for projects, GitHub, and more."
          />
          {/* Feature 7 */}
          <FeatureCard
            Icon={FaCheckCircle}
            title="ATS Optimized"
            desc="Formatted to easily pass applicant tracking systems used by recruiters."
          />
          {/* Feature 8 */}
          <FeatureCard
            Icon={FaCloudUploadAlt}
            title="Import Existing Resume"
            desc="Upload your old resume and edit it with our modern templates."
          />
        </div>
      </div>
    </section>
  );
}

// Reusable Feature Card Component
function FeatureCard({ Icon, title, desc }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition">
      <Icon className="text-4xl text-red-500 mb-4 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default FeaturesSection;
