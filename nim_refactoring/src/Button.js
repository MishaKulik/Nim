import React, { Component } from 'react';

class Buttons extends Component{
  constructor (props) {
    super(props)

  this.state ={
    sticksCount:21,
    currentPlayer:1,
    viz1:"visible",
    viz2:"visible",
    viz3:"visible",
    viz4:"hidden",
    viz5:"hidden",
    viz6:"hidden",
    viz7:"hidden",
  }
}

  render (){

    const P1_B1 ={
      visibility:this.props.sticksCount>1?"visible":"hidden"
    }
    const P1_B2 = {
      visibility:this.props.sticksCount>2?"visible":"hidden"
    }
    const P1_B3 ={
      visibility:this.props.sticksCount>3?"visible":"hidden"
    }


    const Play = {
      visibility:this.props.sticksCount>1?"hidden":"visible"
    }
    const ClassName = "Player" + this.props.currPlayer
    //  console.log("render: " + visib1.visibility);
      return(
        <div>
            <button style ={P1_B1} id = "P1-B1" className = {ClassName} onClick={() => {this.props.action(1)}}>Убрать 1</button>
            <button style ={P1_B2} id = "P1-B2" className = {ClassName}  onClick={() => {this.props.action(2)}}>Убрать 2</button>
            <button style ={P1_B3} id = "P1-B3" className =  {ClassName} onClick={() => {this.props.action(3)}}>Убрать 3</button>
            <div id = "b_play">
              <button style ={Play}  id = "play" onClick={() => {this.props.game_over()}}>Играть ещё</button>
            </div>
       </div>
      )
    }


}

export default Buttons
