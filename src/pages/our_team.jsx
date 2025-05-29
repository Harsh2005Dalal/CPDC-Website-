import React from 'react'
import Card_Faculty from '../components/Card_Faculty.jsx'
import Card_Students from '../components/Card_Students.jsx'
import faculty from '../data/faculty.json'
import students from '../data/students.json'
import Main_Faculty from '../data/Main_Faculty.json'

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Main Faculty Section */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto px-4">
          {Main_Faculty && Main_Faculty.length > 0 ? (
            Main_Faculty.map((member) => {
              return (
                <Card_Faculty 
                  key={member.id}
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                  mail={member.email}
                  phone={member.phone}
                />
              );
            })
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No main faculty members found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Faculty Team Section */}
      <div className="mb-12">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-800">
          FACULTY TEAM
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
          {faculty && faculty.length > 0 ? (
            faculty.map((facultyMember) => {
              return (
                <Card_Faculty 
                  key={facultyMember.id}
                  name={facultyMember.name}
                  designation={facultyMember.designation}
                  image={facultyMember.image}
                  mail={facultyMember.email}
                  phone={facultyMember.phone}
                />
              );
            })
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No faculty members found.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Student Team Section */}
      <div className="mb-12">
        <div className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-800">
          STUDENT TEAM
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto px-4">
          {students && students.length > 0 ? (
            students.map((student) => {
              return (
                <Card_Students 
                  key={student.id}
                  name={student.name}
                  designation={student.designation}
                  image={student.image}
                  mail={student.email}
                  contact={student.phone}
                />
              );
            })
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No student members found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OurTeam