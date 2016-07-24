import React from 'react';


class Nav extends React.Component{
  getStyles(){
    return{
      navStyle:{
        width:'50px',
        height:'30px',
        backgroundColor:'#ccc',
        display:'block',
        textAlign:'center',
        lineHeight:'30px',
        position:'absolute',
        top:'30px',
        left:'30px',
        color:'black'
      }
    }
  }
  render(){
    let style = this.getStyles();
    return(
      <button style={style.navStyle}>导航</button>
    )
  }
}

export default Nav
