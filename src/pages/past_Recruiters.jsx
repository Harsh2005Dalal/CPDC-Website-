import React from 'react'
import PastRecruiters from '../components/companyCard'
import companyData from '../data/pastRecruiters.json'

const past_Recruiters = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 p-4 sm:p-6">
      {companyData.map((com, index) => {
        return (
          <PastRecruiters 
            key={index} 
            company={com}
          />
        );
      })}
    </div>
  )
}

export default past_Recruiters