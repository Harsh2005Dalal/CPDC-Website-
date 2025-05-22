import React from 'react'
import PastRecruiters from '../components/companyCard.jsx'
import companyData from '../data/pastRecruiters.json'

const past_Recruiters = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10 m-auto max-w-[90vw] pt-5 pb-10 justify-items-center">
        {companyData.map((com) =>{
            return(
                <PastRecruiters 
                    key={com.id}
                    logo={com.logo}
                    hired={com.hired}
                    name={com.name}
                    year={com.year}
                    package={com.package}
                />
            );

        })}

      </div>
    </div>
  )
}

export default past_Recruiters
