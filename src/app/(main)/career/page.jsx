import React from 'react';

export const metadata = {
  title: "Career - Dragon News",
  description: "Join the Dragon News team",
};

const jobs = [
  {
    id: 1,
    title: "Senior Reporter",
    department: "National Desk",
    type: "Full Time",
    location: "Dhaka, Bangladesh",
    deadline: "May 15, 2026",
    description:
      "We are looking for an experienced reporter to cover national politics, government affairs, and breaking news. Must have strong investigative skills and the ability to work under deadline pressure.",
    requirements: ["3+ years reporting experience", "Excellent Bengali & English writing", "Strong source network", "Degree in Journalism or related field"],
  },
  {
    id: 2,
    title: "Video Editor",
    department: "Multimedia",
    type: "Full Time",
    location: "Dhaka, Bangladesh",
    deadline: "May 20, 2026",
    description:
      "Join our multimedia team to produce compelling video content for our digital platforms. You will edit daily news segments, documentaries, and social media reels.",
    requirements: ["2+ years video editing experience", "Proficient in Premiere Pro / DaVinci Resolve", "News media experience preferred", "Strong storytelling sense"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Technology",
    type: "Full Time",
    location: "Remote / Dhaka",
    deadline: "June 1, 2026",
    description:
      "Help build and maintain Dragon News's digital platforms. You'll work on our Next.js web app, optimize performance, and collaborate with the design and editorial teams.",
    requirements: ["Strong React & Next.js skills", "Tailwind CSS experience", "REST API integration", "Eye for detail and UI quality"],
  },
  {
    id: 4,
    title: "Social Media Manager",
    department: "Marketing",
    type: "Part Time",
    location: "Remote",
    deadline: "May 30, 2026",
    description:
      "Manage Dragon News's presence across Facebook, Twitter, Instagram, and YouTube. Create engaging content calendars, grow our following, and analyze performance metrics.",
    requirements: ["2+ years social media experience", "Strong content creation skills", "Analytics tools proficiency", "News/media background a plus"],
  },
];

const CareerPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex gap-6">
        <div className="w-48 shrink-0">
          <h2 className="text-lg font-bold mb-3">All Category</h2>
          <ul className="space-y-1">
            {['National News','Breaking News','Regular News','International News','Sports','Entertainment','Culture','Arts','All News'].map((cat, i) => (
              <li key={i}>
                <a href="#" className={`block px-3 py-2 text-sm rounded hover:bg-red-50 hover:text-red-500 ${i === 0 ? 'bg-gray-100 font-semibold' : 'text-gray-600'}`}>
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <div className="bg-red-500 text-white rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-bold mb-1">Join Dragon News</h1>
            <p className="text-red-100 text-sm">Be part of Bangladesh's most trusted journalism team. We're hiring passionate storytellers.</p>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">{job.title}</h2>
                    <p className="text-sm text-red-500 font-medium">{job.department}</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">{job.type}</span>
                </div>

                <div className="flex gap-4 text-xs text-gray-500 mb-3">
                  <span>📍 {job.location}</span>
                  <span>⏰ Deadline: {job.deadline}</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-3">{job.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Requirements:</p>
                  <ul className="space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-5 py-2 rounded transition cursor-pointer">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-56 shrink-0 space-y-5">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-700 mb-3">Login With</h3>
            <button className="w-full flex items-center gap-2 border border-gray-300 rounded px-3 py-2 text-sm mb-2 hover:bg-gray-50">
              <span className="text-blue-600 font-bold">G</span> Login with Google
            </button>
            <button className="w-full flex items-center gap-2 border border-gray-300 rounded px-3 py-2 text-sm hover:bg-gray-50">
              <span className="text-gray-800 font-bold">f</span> Login with Github
            </button>
          </div>


          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-700 mb-3">Find Us On</h3>
            <div className="space-y-2">
              {[{label:'Facebook', color:'text-blue-600'},{label:'Twitter', color:'text-sky-500'},{label:'Pinterest', color:'text-red-500'}].map((s,i) => (
                <a key={i} href="#" className={`flex items-center gap-2 text-sm ${s.color} hover:underline`}>
                  <span className="w-2 h-2 rounded-full bg-current inline-block"></span> {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-700 mb-3">Why Join Us?</h3>
            <ul className="space-y-2">
              {['Competitive salary','Flexible working hours','Growth opportunities','Health benefits','Creative environment'].map((perk, i) => (
                <li key={i} className="text-xs text-gray-600 flex items-center gap-2">
                  <span className="text-red-500">✓</span> {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareerPage;