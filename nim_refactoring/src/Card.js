import React, { Component } from 'react';
import './card.css';
class Card extends Component{
render(){
  const img = {
    backgroundImage: 'url(' + this.props.picture + ')',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
  };
  const card = {
    float: this.props.position,
  }
return(
  <div style={card}>
  <div>

<div class="demo-card-wide mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title"style={img}>
    <h2 class="mdl-card__title-text">Внимание!</h2>
  </div>
  <div class="mdl-card__supporting-text">
  <p>{this.props.text}</p>
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Подробнее
    </a>
  </div>
  <div class="mdl-card__menu">
    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">share</i>
    </button>
  </div>
</div>
</div>
</div>
)
}
}
export default Card;
