import React, { Component } from 'react';
// import BagButton from '../../../Navbar/components/BagButton'

import './style.css';

class ActivitiesButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      onClick: props.onClick,
      // arrayList:[]
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    // const newActivity = {
    //   "description" : "Hola"
    // }
    this.setState({
      clicked: !this.state.clicked,
      // 
    });
    
    // this.state.onClick();
  }


  render() {
    let label = "ADD TO CART";
    let classClicked = "";
    if (this.state.clicked) {
      label = "IN CART";
      classClicked = " clicked";
    }

    return (
      <div 
        className={"ActivitiesButton" + classClicked}
        onClick={() => this.onClick() }>
        { label }
      </div>
    );
  }
}

export default ActivitiesButton;