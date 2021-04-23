import React, { useState } from 'react'
import {ReactComponent as Logo} from '../pic/logo.svg'
import '../style/NavbarStyle.css'

export default function Navbar() {

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Logo class='navbar-brand' />
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03" data-toggle="collapse" data-target=".navbar-collapse">
      <ul class="navbar-nav" style={{marginLeft:'auto'}}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Find A Match</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Dog’s Personalities</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" >About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" >Contact Us</a>
        </li>
      </ul>
        <i class="bi bi-search ml-auto"></i>
    </div>
    
  </div>
</nav>


</div>
    )
}
