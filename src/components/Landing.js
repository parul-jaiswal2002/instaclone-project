import React from 'react'
import { Link } from 'react-router-dom'
import landingimage from '../images/firstImage.jpg'
import './../styles/landing.css'

export default function Landing() {
  return (
      <>
         <div className='landing'>
           <div className='landing-img'>
            <img src={landingimage}/>
           </div>
           <div className='landing-actions'>
               <div className='landing-text'>10x Team 04</div>
               <Link to="/page-layout">
               <div className='forward'>
                <button className='forward'>Enter</button>
               </div>
               </Link>
           </div>
         </div>
      </>
  )
}
