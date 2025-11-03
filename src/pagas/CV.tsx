import { useState } from "react";

function CV() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} min-h-screen flex flex-col items-center py-10 px-4 transition-colors duration-500`}>

      {/* Toggle Button */}
      <div className="mb-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-indigo-600 text-white px-4 py-2 cursor-pointer rounded-md shadow-md hover:bg-indigo-700 transition"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      {/* প্রধান CV Container */}
      <div className={`${darkMode ? "bg-gray-800 shadow-gray-700" : "bg-white shadow-lg"} max-w-4xl w-full p-6 md:p-10 rounded-xl transition-colors duration-500`}>

        {/* হেডার: নাম এবং যোগাযোগ */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-500">Jihad Mia</h1>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm md:text-base`}>Frontend Developer | Web Designer</p>
          </div>
          <div className="mt-4 md:mt-0 text-xs md:text-sm space-y-1 text-center md:text-right">
            <p>Email: <span className="text-indigo-400">jihadmia@example.com</span></p>
            <p>Phone: <span className="text-indigo-400">+880 123 456 789</span></p>
            <p>Location: <span className="text-indigo-400">Bangladesh</span></p>
          </div>
        </div>

        {/* প্রোফাইল */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-500 mb-2">Profile</h2>
          <p className={`${darkMode ? "text-gray-200" : "text-gray-700"} text-sm md:text-base`}>
            আমি একজন passionate Frontend Developer। React, Tailwind CSS, এবং modern web design-এ কাজ করার অভিজ্ঞতা আছে। Responsive এবং user-friendly ওয়েবসাইট বানানো আমার শখ।
          </p>
        </div>

        {/* স্কিলস */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-500 mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"].map(skill => (
              <li
                key={skill}
                className={`${darkMode ? "bg-indigo-700 text-indigo-200" : "bg-indigo-100 text-indigo-700"} px-3 py-1 rounded-full text-xs md:text-sm transition-colors duration-500`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* অভিজ্ঞতা */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-500 mb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Frontend Developer - XYZ Company</h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-xs md:text-sm`}>Jan 2024 – Present</p>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-700"} list-disc list-inside text-sm md:text-base`}>
              <li>React এবং Tailwind CSS দিয়ে responsive ওয়েব অ্যাপ্লিকেশন বানানো।</li>
              <li>ওয়েবসাইটের performance ও user experience অপ্টিমাইজ করা।</li>
            </ul>
          </div>
        </div>

        {/* শিক্ষা */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-500 mb-2">Education</h2>
          <div>
            <h3 className="font-semibold">Bachelor in Computer Science</h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm md:text-base`}>ABC University, Bangladesh | 2020 – 2024</p>
          </div>
        </div>

        {/* প্রোজেক্ট */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-500 mb-2">Projects</h2>
          <ul className={`${darkMode ? "text-gray-200" : "text-gray-700"} list-disc list-inside text-sm md:text-base space-y-1`}>
            <li><strong>Portfolio Website:</strong> React এবং Tailwind CSS ব্যবহার করে personal website বানানো।</li>
            <li><strong>E-commerce Website:</strong> Online store-এ product listing, cart এবং checkout system বানানো।</li>
          </ul>
        </div>

        {/* CV ডাউনলোড বাটন */}
        <div className="mt-6 text-center">
          <a
            href="/JihadMiaCV.pdf"
            download
            className={`px-6 py-3 md:px-8 md:py-3 rounded-md font-medium transition-colors duration-500 ${darkMode ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
          >
            Download CV
          </a>
        </div>

      </div>
    </div>
  );
}

export default CV;
