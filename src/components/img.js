import React from 'react';
import Pic from '../images/img.jpg'

class Img extends React.Component {
  render(){
    let style = {
      width:'500px',
      height:'500px',
      backgroundImage:'url(' + Pic + ')'
    }
    return(
      <div>
        <img src={Pic} />
        <div style={style} />
      </div>
    )
  }
}

export default Img;
