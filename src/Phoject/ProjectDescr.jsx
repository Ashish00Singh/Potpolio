import React from 'react'
import poj2 from './img/poj1.png'
import poj3 from './img/poj2.png'
import poj4 from './img/poj3.png'

function ProjectDescr() {
  return (
    <div className='main'>
          <div className='container project'>

            <div>
              <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="5000">
                    <img src={poj2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="1000">
                    <img src={poj3} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={poj4} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>


            <div className='project_det'>

              <h2>
                Project Name
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt quam ratione eum placeat rem!

              </p>
              <div>
              <h5>Technology</h5>
              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
              Project Link
              </div>


            </div>


          </div>
        </div>
  )
}

export default ProjectDescr