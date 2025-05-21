import React from 'react'
import Card_Faculty from '../components/Card_Faculty.jsx'
import Card_Students from '../components/Card_Students.jsx'
import faculty from '../data/faculty.json'
import students from '../data/students.json'
import Main_Faculty from '../data/Main_Faculty.json'

const our_team = () => {
  return (
    <div>

      <div className='grid grid-cols-2 gap-1 w-[80vw] m-auto'>
          {Main_Faculty.map((m)=>{
            return(
              <Card_Faculty 
                key={m.id}
                name={m.name}
                designation = {m.designation}
                image = {m.image}
                mail = {m.email}
                phone = {m.phone}
              />
            );
          })}
        </div>

      <div className='font-bold text-5xl m-auto flex items-center justify-center text-center pt-5'>FACULTY TEAM</div>
      <div className='grid grid-cols-3 gap-2 w-[80vw] m-auto'>
        {faculty.map((faculty)=>{
          return(
            <Card_Faculty 
              key={faculty.id}
              name={faculty.name}
              designation = {faculty.designation}
              image = {faculty.image}
              mail = {faculty.email}
              phone = {faculty.phone}
            />
          );
        })}
      </div>
      
      <div className='font-bold text-5xl m-auto flex items-center justify-center text-center pt-5'>STUDENT TEAM</div>
      <div className='grid grid-cols-2 gap-1 w-[60vw] m-auto'>
        {students.map((students)=>{
          return(
            <Card_Students 
              key={students.id}
              name={students.name}
              designation = {students.designation}
              image = {students.image}
              mail = {students.email}
              contact = {students.phone}
            />
          );
        })}
      </div>
    </div>
  )
}

export default our_team
