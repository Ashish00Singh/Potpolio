import React from 'react'
import pho from './prof.jpeg'
import './StyleF.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <main className='ashish'>
        <div className='container land'>
    <div className='row  landing'>
        <div className=' col-12 col-sm-7'>
            <p className='Ltitale text-center'>
            <span style={{color:"rgb(152,152,152)"}} >Hey!</span> I'm Ashish Singh Web Devloper / Designer based in India
            </p>
            <Link to="/About" className='btn btn-light'>Let's Talk</Link>
        </div>

        <div className='col-12 col-sm-4'>
            <img className='profile' src={pho} alt="" style={{ width:"300px" }} />
        </div>
    </div>
    </div>
    </main>
  )
}

export default Landing