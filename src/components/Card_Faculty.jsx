import React from 'react'
import a from '../assets/logoiit.png'
import { PiCropDuotone } from 'react-icons/pi'

const Card_Faculty = (props) => {
  return (
    <div className="card h-80 w-70 m-auto mt-20 mb-20 shadow-[2px_2px_10px_rgba(0,0,0,0.2)]">
        <div className='flex justify-center items-center flex-column m-auto'>
            <div className="designation font-bold text-3xl pt-2">{props.designation}</div>
        </div>
      <div className="m-auto w-40 mt-2">
        <img src={props.image} className='h-40 w-40 rounded-[50%] m-auto'></img> {/*Give props.img_add instead of a */}
      </div>

      <div className="detail m-auto flex justify-center flex-col items-center p-5 ">
        <div className='font-medium text-2xl'>{props.name}</div>
        <div className="contact">{props.phone}</div>
        <div className="email">{props.mail}</div>
      </div>
    </div>
  )
}

export default Card_Faculty
