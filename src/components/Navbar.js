import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
  
  <a className="nav-link" href="#">CONCEPT</a>
  <a className="navbar-brand" href="#">
  <img src={require("/mnt/c/dev/projects/thefuturestd/src/assets/logo.PNG")} width="200" height="50" alt="theFutureSTD logo"/>
  </a>
  <a className="nav-link" href="#">ABOUT ME</a>

</nav>

        </div>
    )
}

export default Navbar;