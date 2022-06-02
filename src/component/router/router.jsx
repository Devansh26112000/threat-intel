import React from 'react'

import { Routes, Route} from 'react-router-dom';
import Enterquery from '../enterquery/enterquery';
import ShowData from '../showdata/showData';
import Navbar from '../navbar/Navbar';




function Firstpage() {
  return (
    <>
    <Routes>
     <Route   path='/' element={<Navbar/>}>
     <Route   index element = {<Enterquery />} />
     <Route   path='/showQuerydata'element={<ShowData />}  />
    
     </Route>
    </Routes>
  
    </>
  )
}



export default Firstpage;
