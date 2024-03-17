import React from 'react'
import { Navbar } from '../Component/Navbar'
import prof from './pho.png'
import Footer from '../footer/Footer'

function About() {
  return (
    <>
      <Navbar />
      <Footer/>
      <div className='container'>
        <h1 className='text-center my-3' style={{ backgroundColor: 'blue', borderRadius: '25px', border: "1px solid" }} >ABOUT</h1>
        <div className='pro_about'>
          <div className='xyz'>
            <img className='profile profil' src={prof} alt="Profile img" /><h3 style={{ textDecoration: 'underline' }} >Hello It's me Ashish Singh</h3>
            <p className=''>
              I'm Ashish Singh, a skilled web developer driven by a passion for crafting seamless digital experiences. With expertise in both front-end and back-end technologies, I specialize in transforming creative concepts into functional, user-friendly websites. Collaborative by nature, I thrive in team environments, leveraging my meticulous attention to detail and adaptability to overcome challenges and exceed expectations. Beyond coding, I value continuous learning and stay updated on emerging trends to deliver cutting-edge solutions. Whether it's optimizing performance, integrating complex functionalities, or ensuring responsive design, I'm dedicated to delivering excellence in every project. Let's connect and collaborate on building something remarkable together!
            </p>
          </div>
        </div>
        <div className='skill'>
          <div className='one'>
            <h3>SKILL:</h3>
          </div>
          <div className='two'>
            <div>
              <h3>HTML</h3>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: "100%" }}>HTML 50%</div>
              </div>
            </div>
            <div>
              <h3>CSS</h3>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: "100%" }}>CSS 50%</div>
              </div>
            </div>
            <div>
              <h3>React3</h3>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: "50%" }}>REACT 50%</div>
              </div>
            </div>
            <div>
              <h3>React4</h3>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: "50%" }}>REACT 50%</div>
              </div>
            </div>
            <div>
              <h3>React5</h3>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: "50%" }}>REACT 50%</div>
              </div>
            </div>
          </div>

          {/* ------------------------------------- Achivement ---------------------------------------- */}

        </div>
        <br />

        <div className='achivement'>

          <div>
            <h3>Education</h3> <hr />
            <section class="py-3">
              <ul class="timeline">
                <li class="timeline-item mb-5">
                  <h5 class="fw-bold">Graduation</h5>
                  <p class="mb-2 fw-bold">2022</p>
                  <p>
                    I have Completed my graduation from <br />
                    <strong>
                      Maulana Abul Kalam Azad University of Technology.
                    </strong>
                    <p>I got 8.1 CGPA out of 10.0 CGPA.</p>
                  </p>
                </li>

                <li class="timeline-item mb-5">
                  <h5 class="fw-bold">Intermediate Education</h5>
                  <p class=" mb-2 fw-bold">2018</p>
                  <p class="">
                    I have Completed my 12th Standard from <br />
                    <strong>
                      RAMASHANKAR DEVI HIGH SCHOOL.
                    </strong>
                    <p>I got 6.3 CGPA out of 10.0 CGPA.</p>
                  </p>
                </li>

                <li class="timeline-item mb-5">
                  <h5 class="fw-bold"> Secondary School Certificate </h5>
                  <p class=" mb-2 fw-bold">2015</p>
                  <p>
                    I have Completed my 10th Standard from <br />
                    <strong>
                      Imperial Public School.
                    </strong>
                    <p>I got 8.2 CGPA out of 10.0 CGPA.</p>
                  </p>
                </li>
              </ul>
            </section>
          </div>

          {/*  ---------------------------------------- 2 layer ---------------------------------------------- */}

          <div>
            <h3>Achivement</h3> <hr />
            <section class="py-3">
              <ul class="timeline">
                <li class="timeline-item mb-5">
                  <h5 class="fw-bold">Graduation</h5>
                  <p class="mb-2 fw-bold">2022</p>
                  <p>
                    I have Completed my graduation from <br />
                    <strong>
                      Maulana Abul Kalam Azad University of Technology.
                    </strong>
                    <p>I got 8.1 CGPA out of 10.0 CGPA.</p>
                  </p>
                </li>
                <li class="timeline-item mb-5">
                  <h5 class="fw-bold">Intermediate Education</h5>
                  <p class="mb-2 fw-bold">2018</p>
                  <p>
                    I have Completed my 12th Standard from <br />
                    <strong>
                      RAMASHANKAR DEVI HIGH SCHOOL.
                    </strong>
                    <p>I got 6.3 CGPA out of 10.0 CGPA.</p>
                  </p>
                </li>
                <li class="timeline-item mb-5">
                  <h5 class="fw-bold">Our team exceeds 10 people</h5>
                  <p class="mb-2 fw-bold">24 June 2020</p>
                  <p>
                    I have Completed my 10th Standard from <br />
                    <strong>
                      Imperial Public School.
                    </strong>
                    <p>I got 8.2 CGPA out of 10.0 CGPA.</p>
                  </p>
                </li>
              </ul>
            </section>
          </div>

        </div>

      </div>
    </>
  )
}

export default About