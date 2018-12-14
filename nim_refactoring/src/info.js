import React, { Component } from 'react';
import './Nim.css';

class Info extends Component{
    render (){
      const Loser ={
        visibility:this.props.sticksCount>1?"hidden":"visible"
      }
      const Hide ={
        visibility:this.props.sticksCount>1?"visible":"hidden"
      }
      return (
        <div id = "states">
        <p style = {Loser}>Победил {3-this.props.currPlayer} игрок</p>
        <p style = {Hide}>Осталось палочек на столе: {this.props.sticksCount}</p>
        <p style = {Hide}>Очередь игрока: {this.props.currPlayer}</p>
        </div>
    )
    }
}


export default Info
