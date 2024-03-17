import React from 'react'
import Typing from './Typing'
import { Link } from 'react-router-dom'


function Home() {

    return (

        <main className='text-center home-cont'>
            <div className='home'>
                <div><Typing /></div>
                <h5>As a seasoned web developer, I thrive on merging creativity with cutting-edge technology to craft dynamic digital experiences. Proficient in HTML5, CSS3, JavaScript, and frameworks like React and Vue.js, I specialize in responsive design and optimizing user experiences across platforms. Let's collaborate to bring your vision to life!</h5>
                 <div className='mt-4'>
                    <Link to="/project" className='btn btn-primary me-3 px-4' >See the Project</Link>
                    <Link to="/contact" className='btn btn-primary me-3 px-4' >More about me</Link>
                 </div>
            </div>

        </main>
    )
}

export default Home