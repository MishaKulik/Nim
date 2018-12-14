import React, { Component } from 'react';
import './Nim.css';

class Sticks extends Component{
    render (){
      var images = [];
    for(var i =0;i<this.props.sticksCount;i++){
      //MySticks +="|",
      if (this.props.sticksCount>1){
        images.push(<img width = "30"src="http://sparkysite.ru/small/skype/skype01/sskype09.png"/>)
      }
    }
      return (
        <div id = "sticks">
            {images}
        </div>
    )
    }
}


export default Sticks
