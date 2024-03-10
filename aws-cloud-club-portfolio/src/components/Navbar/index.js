import React from 'react'

const Navbar = () => {
  return (
    
    <NavbarContainer>
      <div>
        <a href="home.html">
          logo
        </a>

        <div>
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
