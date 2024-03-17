import React, { useState } from 'react'
import { Navbar } from '../Component/Navbar'
import MapingProje from './MapingProje'
import Data from '../Data/Project'

function Project() {


  return (
    <>
      <Navbar />






      <div className='proj_list'  >
        <h1 className='text-center' >Ashish Singh</h1> <hr style={{ margin: '4px' }} /> <hr style={{ margin: '4px' }} />

        <div className='carcont' >

          {
            Data.map((projext )=>
              
              <MapingProje
              key={projext.id}
              Pname= {projext.project}
              des= {projext.Tech}
              url= {projext.url}
              />
            )
          }





        </div>



      </div>



    </>
  )
}

export default Project