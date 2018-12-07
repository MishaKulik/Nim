import React, { Component } from 'react';
import './Nim.css';

class Nim extends Component{

  constructor (props) {
    super(props)
    this.state ={
      sticksCount:this.props.count,
      currentPlayer:1,
      viz1:"visible",
      viz2:"visible",
      viz3:"visible",
      viz4:"hidden",
      viz5:"hidden",
      viz6:"hidden",
      viz7:"hidden",
      game:1,
      game_ch:0,
    }
  }
  game_over(){
      // window.location.reload(1);
      this.setState({
        sticksCount:21,
        currentPlayer : 1,
        viz1:"visible",
        viz2:"visible",
        viz3:"visible",
        viz4:"hidden",
        viz5:"hidden",
        viz6:"hidden",
        viz7:"hidden",
        game_ch:0,
      })

  }
  removeSticks(num,player){
    var newCount = this.state.sticksCount-num;

    if (player===2){
      if(newCount>0){
        this.setState({
          sticksCount:newCount,
          currentPlayer : 3-this.state.currentPlayer,
          viz1:newCount>1?"visible":"hidden",
          viz2:newCount>2?"visible":"hidden",
          viz3:newCount>3?"visible":"hidden",
          viz4:newCount>1?"hidden":"hidden",
          viz5:newCount>2?"hidden":"hidden",
          viz6:newCount>2?"hidden":"hidden",
        })
      }
    }else{
      if(newCount>0){
      this.setState({
        sticksCount:newCount,
        currentPlayer : 3-this.state.currentPlayer,
        viz1:newCount>1?"hidden":"hidden",
        viz2:newCount>2?"hidden":"hidden",
        viz3:newCount>3?"hidden":"hidden",
        viz4:newCount>1?"visible":"hidden",
        viz5:newCount>2?"visible":"hidden",
        viz6:newCount>3?"visible":"hidden",
      })
    }
  }
  }

    render (){
      if(this.state.sticksCount===1){
        if(this.state.game_ch===0){
              this.setState({
                game_ch:1,
                viz7:"visible",
              })
         }
      }
    //  this.check()
      //this.currentPlayersButtons("hidden","visible")
    //  var MySticks = ""
      var images = [];
      for(var i =0;i<this.state.sticksCount;i++){
        //MySticks +="|",
        if (this.state.sticksCount>1){
          images.push(<img width = "20"src="http://sparkysite.ru/small/skype/skype01/sskype09.png"/>)
        } else {

        }
      }
      const P1_B1 ={
        visibility:this.state.viz1
      }
      const P1_B2 = {
        visibility:this.state.viz2
      }
      const P1_B3 ={
        visibility:this.state.viz3
      }
      const P2_B1 = {
        visibility:this.state.viz4
      }
      const P2_B2 ={
        visibility:this.state.viz5
      }
      const P2_B3 = {
        visibility:this.state.viz6
      }
      const Play = {
        visibility:this.state.viz7
      }

      return (
        <div className = "Nim" id = "nim">
          <div id="loser">
            <p style= {Play} id = "text">Победил {3-this.state.currentPlayer} игрок</p>
          </div>
          <div id = "stats">
            <p>Осталось палочек:{this.state.sticksCount}</p>
            <p>Очередь игрока:{this.state.currentPlayer}</p>
          </div>
          <div id = "sticks">
            {images}
           </div>
          <div id = "buttons">
            <button style ={P1_B1} id = "P1-B1"className = "Player1"onClick={() => {this.removeSticks(1,1)}}>Убрать 1</button>
            <button style ={P1_B2} id = "P1-B2"className = "Player1"onClick={() => {this.removeSticks(2,1)}}>Убрать 2</button>
            <button style ={P1_B3} id = "P1-B3"className = "Player1"onClick={() => {this.removeSticks(3,1)}}>Убрать 3</button>
            <button style ={P2_B3} id = "P2-B3"className = "Player2"onClick={() => {this.removeSticks(3,2)}}>Убрать 3</button>
            <button style ={P2_B2} id = "P2-B2"className = "Player2"onClick={() => {this.removeSticks(2,2)}}>Убрать 2</button>
            <button style ={P2_B1} id = "P2_B1"className = "Player2"onClick={() => {this.removeSticks(1,2)}}>Убрать 1</button>
            <button style ={Play}  id = "play" onClick={() => {this.game_over()}}>Играть ещё</button>
          </div>
        </div>
    )
    }
}


export default Nim
