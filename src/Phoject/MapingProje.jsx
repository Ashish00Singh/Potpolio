import React, { useState } from 'react'
import logoAS from './logo-black.png'
import poj1 from './img/phoj.png'
function MapingProje(props) {
  return (
    <>
      <div className=' card' style={{ width: '12.2rem' }}>
            <img src={poj1} alt="" style={{ width: '12rem' }} />
            <div className='conte'>
              <p className='mb-0'>{props.Pname}</p>
              <img className='logo' src={logoAS} alt="" />
              <span>
                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet iste placeat sit? Quo, dolorum facilis? */}
              <small>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>BootStrap</li>
              <li>API Fetching</li>
              </small>
              </span><br />
              <a href={props.url} target="_blank" className='btn btnpro  btn-outline-secondary bg-light'  >more</a>
              
            </div>
          </div>

      

    </>

  )
}

export default MapingProje