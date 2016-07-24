import React from 'react';


class Header extends React.Component{
  getStyles(){
    return{
      headerStyle:{
        width:'100%',
        height:'200px',
        backgroundColor:'blue',
        margin:'0',
        padding:'0',
        display:'block',
        textAlign:'center',
        lineHeight:'200px'
      }
    }
  }
  render(){
    let style = this.getStyles();
    return(

        <h1 style={style.headerStyle}>百日百页面</h1>

    )
  }
}

export default Header
