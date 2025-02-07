import React from 'react'
import logo from "../assets/Netflix_Logo_PMS.png"

const Header = () => {
  return (
    <>
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black'>
        <img src={logo} alt="logo" className='w-40'/>
      </div>
    </>
  )
}

export default Header