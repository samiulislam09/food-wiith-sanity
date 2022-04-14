import React from 'react'
import './Footer.css'
import facebook from './icons/facebook-f-brands.svg'
import instagram from './icons/instagram-brands.svg'
import linkedin from './icons/linkedin-in-brands.svg'
import youtube from './icons/youtube-brands.svg'
import pinterest from './icons/pinterest-p-brands.svg'
import twitter from './icons/twitter-brands.svg'

function Footer() {
  return (
      <div>
          <div className='footer-content'>
              <div className="logo">
                    <h1>Logo</h1>
              </div>
              <div className="our-location">
                  <h2>Our Location</h2>
                    <p>Shah ali plaza</p>
                    <p>mirpur 10</p>
              </div>
              <div className="sign-up">
                  <p>Wanna be our newsletter?</p>
                  <input type='text' placeholder='email'></input>
                  <button>sign up</button>
              </div>
          </div>
          <div className='copy-text'>
              <p>Copyright ©2022 meal deal. All Rights Reserved.</p>
          </div>
    </div>
  )
}

export default Footer