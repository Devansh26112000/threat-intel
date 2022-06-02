import React from "react";




const ShowData = ({passingdata})=> {
  
 

  return (
    <div>
     

        <form>
        <div className="container">

       
         <h1>Result</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label"> Verdict</label>
        <input  className="form-control" value={passingdata ? passingdata.verdict || "not found":""} readOnly />
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Type</label>
        <input   className="form-control"  value={passingdata ? passingdata.type || "not found":""}readOnly/>
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Indicator ID</label>
        <input  className="form-control"  value={passingdata ? passingdata.indicator_id || "not found":""}readOnly  />
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Last_Queried</label>
        <input  className="form-control"  value={passingdata ? passingdata.last_queried || "not found":""}  readOnly  />
         </div>
         <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Indicator_title</label>
        <input  className="form-control"  value={passingdata ? passingdata.indicator_title || "not found":""}   readOnly />
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Trivia_key</label>
        <input  className="form-control"   value={passingdata ? passingdata.trivia_key || "not found":""}  readOnly />
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Trivia_key Known AS</label>
        <input  className="form-control"     value={passingdata ? passingdata.trivia_key_name || "not found":""} readOnly/>
         </div>
         <div className="mb-3">
         <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
         <input  className="form-control"     value={passingdata ? passingdata.description || "not found":""} readOnly/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Tags used</label>
        <input  className="form-control"    value={passingdata ? passingdata.tag || "not found":""}   readOnly/>
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Key use display name</label>
        <input  className="form-control"     value={passingdata ? passingdata.malware_display_name || "not found":""}  readOnly/>
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Malware ID</label>
        <input  className="form-control"     value={passingdata ? passingdata.malware_id || "not found":""}  readOnly/>
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Industry</label>
        <input  className="form-control"     value={passingdata ? passingdata.industry || "not found":""} readOnly />
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Knowledge Links </label>
        <input  className="form-control"      value={passingdata ? passingdata.links || "not found":""} readOnly/>
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Country</label>
        <input  className="form-control"     value={passingdata ? passingdata.country || "not found":""} readOnly />
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Attack Id</label>
        <input  className="form-control"    value={passingdata ? passingdata.attack_id || "not found":""} readOnly  />
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Attack name</label>
        <input  className="form-control"   value={passingdata ? passingdata.attack_id_name || "not found":"" } readOnly />
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Attack Display Name</label>
        <input  className="form-control"  value={passingdata ? passingdata.attack_id_display_name || "not found":"" }readOnly />
         </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Adversary</label>
        <input  className="form-control"  value={passingdata ? passingdata.adversary || "not found":""}readOnly />
         </div>
        
         </div>
        
         
        
        
        </form>

      
        </div>
    
    
  )
}

export default ShowData