import React from 'react';
import {Link} from 'react-router-dom'

const PlacementCell = () => {
  return (
    <div className="font-sans text-gray-800">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-3xl text-blue-900 pb-2 border-b-3 border-blue-500 mb-6">
            About the Cell
          </h2>
          <p className="text-lg">
            The Training and Placement Cell at IIT Ropar serves as the interface between the students and the industry. 
            We facilitate the process of student placement by organizing campus interviews for final-year students, 
            as well as arranging for internships for pre-final year students. The cell is managed by a team of 
            dedicated faculty members and student representatives.
          </p>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="mb-12 ">
          <h2 className="text-3xl text-blue-900 pb-2 border-b-3 border-blue-500 mb-6">
            Our Mission & Vision
          </h2>
          <div className="flex flex-wrap gap-8">
            {/* Mission Card */}
            <div className="flex-1 min-w-[300px] bg-gray-50 p-8 rounded-lg shadow-md relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
              <h3 className="text-2xl text-blue-900 mb-4">Mission</h3>
              <div>
                <p className="mb-4">
                  The mission of the Training and Placement Cell at IIT Ropar is to provide excellent 
                  placement opportunities to all students by establishing strong industry partnerships 
                  and preparing students for successful careers through comprehensive skill development programs.
                </p>
                <p className="mb-2">We are committed to:</p>
                <ul className="list-disc pl-5">
                  <li>Facilitating career guidance for students</li>
                  <li>Building and maintaining strong corporate relationships</li>
                  <li>Identifying and addressing gaps between industry requirements and academic curriculum</li>
                  <li>Providing infrastructure and support for seamless recruitment processes</li>
                </ul>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="flex-1 min-w-[300px] bg-gray-50 p-8 rounded-lg shadow-md relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
              <h3 className="text-2xl text-blue-900 mb-4">Vision</h3>
              <div>
                <p className="mb-4">
                  Our vision is to establish IIT Ropar as a premier destination for national and 
                  international recruiters by consistently delivering industry-ready professionals 
                  who can contribute to technological advancement and innovation globally.
                </p>
                <p className="mb-2">We envision:</p>
                <ul className="list-disc pl-5">
                  <li>100% placement for all eligible students</li>
                  <li>Attracting diverse employers from various sectors</li>
                  <li>Establishing IIT Ropar as a brand known for quality technical talent</li>
                  <li>Creating a self-sustaining ecosystem for career development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Objectives Section */}
        <section className="mt-12">
          <h2 className="text-3xl text-blue-900 pb-2 border-b-3 border-blue-500 mb-6">
            Key Objectives
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-0 m-0">
            {/* Objective Card 1 */}
            <li className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <div className="text-lg">
                Provide comprehensive placement assistance to all students and organize campus recruitment drives.
              </div>
            </li>
            
            {/* Objective Card 2 */}
            <li className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <div className="text-lg">
                Develop and nurture long-term relationships with industry partners and corporate houses.
              </div>
            </li>
            
            {/* Objective Card 3 */}
            <li className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <div className="text-lg">
                Conduct skill development workshops, training programs, and mock interviews to prepare students for recruitment processes.
              </div>
            </li>
            
            {/* Objective Card 4 */}
            <li className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                4
              </div>
              <div className="text-lg">
                Gather feedback from industry about curriculum relevance and student preparedness to continuously improve academic offerings.
              </div>
            </li>
            
            {/* Objective Card 5 */}
            <li className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center relative z-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100 hover:z-20 hover:cursor-pointer">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                5
              </div>
              <div className="text-lg">
                Establish an alumni network to facilitate mentorship and career guidance opportunities for current students.
              </div>
            </li>
          </ul>
        </section>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-center py-12 px-8 rounded-lg text-white mt-12">
          <h3 className="text-2xl mb-4">Partner With Us</h3>
          <p className="text-xl mb-6">
            Discover the exceptional talent at IIT Ropar and find your organization's next generation of leaders and innovators.
          </p>
          <Link 
            to="/recruiter-portal" 
            className="inline-block bg-white text-blue-900 px-6 py-3 rounded font-semibold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            Recruit From IIT Ropar
          </Link>
        </div>
      </main>
      
    </div>
  );
};

export default PlacementCell;