import React, { Component } from 'react';
import './Nim.css';
import Buttons from './Button';
import Sticks from './Sticks';
import Info from './info';

class Nim extends Component{
  constructor (props) {
    super(props)
        this.removeSticks = this.removeSticks.bind(this)
        this.game_over = this.game_over.bind(this)
  //  var is_visible = (this.props.player === 1)?"visible":"hidden"

  this.state ={
    sticksCount:this.props.count,
    currPlayer:1
}}
  removeSticks(sticks){
  this.setState({
    sticksCount:this.state.sticksCount - sticks,
    currPlayer:3 - this.state.currPlayer
  })
}
game_over(){
 this.setState({
   sticksCount:this.props.count,
   currPlayer:1
 })
}
    render (){
      return (
        <div className = "Nim">
          <div>
            <Info sticksCount={this.state.sticksCount} currPlayer={this.state.currPlayer}/>
          </div>
          <div>
            <Sticks sticksCount={this.state.sticksCount}/>
          </div>
          <div>
            <Buttons sticksCount={this.state.sticksCount} currPlayer={this.state.currPlayer} action= {this.removeSticks} game_over = {this.game_over}/>
          </div>

        </div>
    )
    }
}


export default Nim
