import React from 'react'
import clogo from '../assets/logocdpc.png'
import {Link} from 'react-router-dom'
import iitlogo from '../assets/logoiit2.png'

const Navbar = () => {
  return (
    <div>
      <div className="box1 flex flex-row justify-between items-center pt-2 pb-2 bg-blue-100 pl-5 pr-5 sticky">
        <div className="cpdc_logo">
          <Link to='/'><img src={clogo} className='h-[90px] p-2 invert' alt="logocc" /></Link>
        </div>

        <div className="box2 flex flex-row gap-15 items-center">
          <div className="buttons flex flex-row gap-6 text-black ">
            <Link to='/recruit-us'><button class='font-medium text-2xl align-middle pl-3 pr-3 hover:bg-blue-300 p-[15px] rounded-xl hover:cursor-pointer font-sans'>Why Recruit?</button></Link>
            <Link to='/about-us'><button class='font-medium text-2xl align-middle pl-3 pr-3 hover:bg-blue-300 p-[15px] rounded-xl hover:cursor-pointer'>About CDPC</button></Link>
            <Link to='/corporate-connect-home'><button class='font-medium text-2xl align-middle hover:bg-blue-300 pt-[15px] pb-[15px] pl-[25px] pr-[25px] rounded-xl hover:cursor-pointer'>CC</button></Link>
            <Link to='/placement-stats'><button class='font-medium text-2xl align-middle pl-3 pr-3 hover:bg-blue-300 p-[15px] rounded-xl hover:cursor-pointer'>Placements</button></Link>
          </div>

          <div className="logo2">
            <Link to='/iitRopar'><img src={iitlogo} alt="iitlogo" className='h-[80px] p-1 invert' /></Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar
