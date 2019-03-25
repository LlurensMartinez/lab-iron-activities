import React, { Component } from 'react';
import './style.css'
import BagButton from './components/BagButton'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>BRAND</h1>
        <div class="NavIcons">
        <p>0€</p>
        <BagButton
          onClick={() => console.log("hola")}
        />
        <i id ="star" class="fas fa-star"></i>
        </div>

      </nav>
        
      
    );
  }
}

export default Navbar;