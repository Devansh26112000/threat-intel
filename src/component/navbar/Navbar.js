import React, { Fragment } from 'react'

import picture from '../pic/softlab.bmp'
import { Link, Outlet } from 'react-router-dom'


 
export default function Navbar() {
  return (
    <Fragment>

    <div> 
  
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a
          
          href="https://softlabsinfo.tech"
          
          >
      <img src= {picture} alt="Softlabs" />
        
        </a>
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
            
          
          <li className="nav-item">
            <a className="nav-link"   href="https://softlabsinfo.tech/aboutus/">About</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
          </li>

            <li className="nav-item">
            <a className="nav-link" href="https://softlabsinfo.tech/contact-us/">Contact</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="https://softlabsinfo.tech/partners/">Partners</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="https://softlabsinfo.tech/career/">Career</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="https://softlabsinfo.tech/contact-us/">Contact</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            </li>

         
        </ul>
        
        <Link  type="button" className="btn btn-outline-primary mx-5" to='/' >Home</Link>
        
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </div>
      <Outlet/>
    </Fragment>
  )
}
 
  
 


