import React from 'react'
import "./style.less"

export default class Buttons extends React.Component{

  render(){
    return(
      <div className="buttons">
      {this.props.buttonText}
      </div>
    )
  }
}