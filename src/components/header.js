import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';


class Header extends React.Component{
  getStyles(){
    return{
      headerStyle:{
        width:'100%',
        height:'200px',
        backgroundColor:'#00bcd4',
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

        <h1 style={style.headerStyle}>MY DEMO</h1>

    )
  }
}

export default Header
