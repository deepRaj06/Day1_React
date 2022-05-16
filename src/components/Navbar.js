import React from 'react';

export default function Navbar() {

    return  (
        <nav className="navbar navbar-dark bg-dark">
            
        <div className="container-fluid">
         <span className="navbar-brand mb-0 h1 light">LOGOBAKERY</span>
         <div className="threeLinks light">
             <a className="mx-4" href="/">Services</a>
             <a className="mx-4" href="/">Projects</a>
             <a className="mx-4" href="/">About</a>
         </div>

         <button type="button" className="btn btn-primary">
                Contact
        </button>

        </div>
      </nav>
    )
}