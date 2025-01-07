import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Techkshetra Info Solutions Pvt Ltd",
      logo: "/images/logo/company_logo.png", // Replace with your logo path
      duration: "Nov 2023 – Present",
      details: [
        "Developed an automated reporting system to track task progress and generate real-time insights across multiple departments. Integrated the reporting functionality into managers' dashboards for efficient monitoring.",
        "Implemented REST APIs and worked on mobile app development for automating office attendance. Developed features for photo fetching, capturing, and saving images to the server for accurate identification and visitor log management.",
        "Integrated Microsoft meeting scheduling using Azure AD and Graph API, allowing users to schedule meetings and send automated notifications to attendees.",
        "Migrated legacy code to the latest versions of MySQL and PHP, optimizing performance and ensuring full compatibility with modern systems. Refactored code and ensured end-to-end functionality.",
        "Participated in code reviews and contributed to overall development processes.",
        "Collaborated in team to test migration of production grade data to achieve minimal downtime and maintain data integrity.",
        "Implemented push notifications using Cordova and Firebase, ensuring timely alerts and reminders for users for the mobile app featuring real-time face recognition for accurate attendance marking."
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Techkshetra Info Solutions Pvt Ltd",
      logo: "/images/logo/company_logo.png", // Replace with your logo path
      duration: "July 2023 – Nov 2023",
      details: [
        "Developed Multi-Level Login Systems and Role-Based Access Controls ensuring controlled access and user authentication",
        "Integrated File Upload, Export, and Pagination Functionalities",
        "Implemented Razorpay payment integration (test mode) in the course management system, enabling secure online transactions for course enrollments.",
        "Created Interactive and Responsive User Interfaces",
        "Code Migration and Technology Upgrade-. Refactored code, updated libraries, and ensured seamless functionality across all components.",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container relative">
        <h2 className="mb-12 text-3xl font-bold text-center">Work Experience</h2>

        {/* Vertical Line for Desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 lg:block hidden"></div>

        {/* Desktop Layout: Left/Right Layout with Center Logo */}
        <div className="relative flex flex-col space-y-16 lg:flex hidden">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center w-full max-w-4xl mx-auto">
              {/* Left Side Content */}
              {index % 2 === 0 ? (
                <div className="w-1/2 pr-6">
                  <div className="block border border-gray-300 rounded-lg p-4 hover:border-gray-400 flex flex-col h-full transition-all shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <p className="italic text-gray-400 mb-1">{exp.duration}</p>
                    <p className="font-medium text-gray-500 flex-grow">{exp.company}</p>
                    <ul className="mt-2 list-disc list-inside text-gray-500 flex-grow space-y-1">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="w-1/2"></div>
              )}

              {/* Center Logo */}
              <div className="relative z-10 w-16 h-16 mx-auto bg-white rounded-full border-4 border-gray-300 flex items-center justify-center shadow-md">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>

              {/* Right Side Content */}
              {index % 2 !== 0 ? (
                <div className="w-1/2 pl-6">
                  <div className="block border border-gray-300 rounded-lg p-4 hover:border-gray-400 flex flex-col h-full transition-all shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <p className="italic text-gray-400 mb-1">{exp.duration}</p>
                    <p className="font-medium text-gray-500 flex-grow">{exp.company}</p>
                    <ul className="mt-2 list-disc list-inside text-gray-500 flex-grow space-y-1">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="w-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View (Cards stacked vertically) */}
        <div className="lg:hidden">
          <div className="relative flex flex-col space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col items-center w-full max-w-4xl mx-auto">
                {/* Card Layout for Mobile */}
                <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-4 border border-gray-300 rounded-lg hover:border-gray-400 shadow-lg mb-6">
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  <p className="italic text-gray-400 mb-1">{exp.duration}</p>
                  <p className="font-medium text-gray-500 mb-2">{exp.company}</p>
                  <ul className="mt-2 list-disc list-inside text-gray-500 space-y-1">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
