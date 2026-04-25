import React from 'react';

export const metadata = {
  title: "About Us - Dragon News",
  description: "Learn about Dragon News - Best news portal in Bangladesh",
};

const AboutUs = () => {
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
          <h1 className="text-2xl font-bold mb-6 text-gray-800">About Us</h1>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-red-500 mb-3">The Dragon News</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Dragon News is Bangladesh's most trusted and fastest-growing digital news portal. Founded with a mission to deliver unbiased, accurate, and timely news to millions of readers, we have been at the forefront of digital journalism since our inception.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Our team of dedicated journalists and reporters work around the clock to bring you breaking news, in-depth analysis, and comprehensive coverage of national and international events. We believe in <strong>Journalism Without Fear or Favour</strong>.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              From national politics to sports, entertainment to business — Dragon News covers it all with integrity and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 border border-red-100 rounded-lg p-5">
              <h3 className="font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To provide accurate, timely, and unbiased news coverage to every corner of Bangladesh and beyond, empowering citizens with reliable information.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To be the most trusted news source in South Asia, setting the gold standard for digital journalism with innovation and integrity.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Our Team</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Awlad Hossain', role: 'Editor in Chief' },
                { name: 'Rahim Uddin', role: 'Senior Reporter' },
                { name: 'Fatema Khanam', role: 'International Desk' },
              ].map((member, i) => (
                <div key={i} className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-sm transition">
                  <div className="w-14 h-14 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center text-gray-500 text-xl font-bold">
                    {member.name[0]}
                  </div>
                  <p className="font-semibold text-sm text-gray-800">{member.name}</p>
                  <p className="text-xs text-red-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="w-56 shrink-0 space-y-5">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-700 mb-3">Login With</h3>
            <button className="w-full flex items-center gap-2 border border-gray-300 rounded px-3 py-2 text-sm mb-2 cursor-pointer hover:bg-gray-100">
              <span className="text-blue-600 font-bold">G</span> Login with Google
            </button>
            <button className="w-full flex items-center gap-2 border border-gray-300 rounded px-3 py-2 text-sm cursor-pointer hover:bg-gray-100">
              <span className="text-gray-800 font-bold">f</span> Login with Facebook
            </button>
          </div>

          {/* Find Us On */}
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

          {/* Contact */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-700 mb-3">Contact Us</h3>
            <p className="text-xs text-gray-500 mb-1">📍 Dhaka, Bangladesh</p>
            <p className="text-xs text-gray-500 mb-1">📧 info@dragonnews.com</p>
            <p className="text-xs text-gray-500">📞 +880 1700-000000</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;