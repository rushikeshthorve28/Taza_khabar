import React from 'react';
import { Link } from 'react-router-dom';
const Navbar=()=>{
 
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg  bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white mx-3" to="/"><h3>Navbar</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
      <li className="nav-item mx-3">
          <Link className="nav-link text-white mx-3 h5" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white mx-3 h5" to="/entertainment">Entertainment</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-white mx-3 h5" to="/health">health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white mx-3 h5"  to="/science">science</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link text-white mx-3 h5" to="/sports">sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white mx-3 h5" to="/technology">technology</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>
      
    )
  }


export default Navbar;
