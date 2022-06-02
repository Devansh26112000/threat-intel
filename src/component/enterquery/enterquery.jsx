import axios from 'axios';
import React, { useState } from 'react'

import ShowData from '../showdata/showData';

function Enterquery() {

    const [requestid, setrequestid] = useState('');
    const [getData,setData] = useState();



   
    const setrequestidfunction = (event) => {
        let updateid = encodeURIComponent(event.target.value);
        setrequestid(updateid);
      

         }



     const  handleRequestSubmit=()=>{
                axios
                  .get(`http://localhost:4000/request/${requestid}`)
                  
                  .then((data)=>{
                    console.log(data)
                    if (data && data.data && data.data.length >0) {
                        setData(data.data[0]);
                    } else {

                    }
                   
                  
                  });
                  
                }      
    
          
  
    return (
      <>
        
        
        <div className="w3-card-4">
          <div className="w3-container w3-green">
            <h2>Enter Your Request</h2>
          </div>
      
          <form className="container">
            
            <input className="Search-box" type="text" value={decodeURIComponent(requestid)} onChange={setrequestidfunction} size="50"/>
           
           
    
           
          <button type="button"  className="btn btn-primary" onClick={ handleRequestSubmit}> Submit</button>
          </form>
          </div>
          <div>
          
          </div>
           {getData && <ShowData passingdata={getData}/>}
        
      </>








  )
}

export default Enterquery;