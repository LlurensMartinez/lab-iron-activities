import React, { Component } from 'react';

class BagButton extends Component {

  state = {
    clicked: false,
    onClick: this.props.onClick
  }

  onClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  // cada vex que hacemos click llamamos a la funcion   
    this.state.onClick();
  }


  render() {

    let classClicked = "";
    if (this.state.clicked) {
      classClicked = " clicked";
    }
    return (
      <div
      id="bag"
      className={"fas fa-shopping-bag" + classClicked}
      onClick={() => this.onClick() }>
      <div className="info">
         <p>YOUR CAR IS EMPTY</p>
      </div>
      </div>
      
      
      
      // <div 
      //   className={"ActivitiesButton" + classClicked}
      //   onClick={() => this.onClick() }>
      //   <i id="bag" class="fas fa-shopping-bag"></i>
      //   <div className="info">
      //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita laboriosam numquam nihil eaque voluptatibus. Dicta beatae voluptatibus, quaerat aut odit at molestias, rem, quod quia officiis minus doloribus aspernatur asperiores.
      //   </div>
      // </div>
    );
  }
}

export default BagButton;