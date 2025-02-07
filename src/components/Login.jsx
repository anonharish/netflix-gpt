import React from 'react'
import netflixBg from '../assets/netflix_bg.jpg'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className=''>
        <img src={netflixBg} alt="Netflix_background_image"/>
      </div>
    </div>
  )
}

export default Login