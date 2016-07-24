import React from 'react';


class Nav extends React.Component{
  constructor(){
    super();
    this.state = {
      show : true
    }
  }
  handleToggle(){
    this.setState({
      show: !this.state.show
    })
  }

  getStyles(){
    let show = this.state.show ? "-100%" : "0";
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
      },
      ulStyle:{
        width:'30%',
        height:'100%',
        position:'absolute',
        top:'0',
        left:'0',
        padding:'0',

      },
      liStyle:{
        listStyle:'none',
        lineHeight:'50px',

        width:'30%',
        height:'50px',
        backgroundColor:'yellow',


      },
      divStyle:{
        width:show,
        position:'absolute',
        top:'0',
        left:'0',
        backgroundColor:'#ccc',
        opacity:'0.5',

      }
    }
  }
  render(){
    let style = this.getStyles();
    return(
      <div>
      <button style={style.navStyle} onClick={this.handleToggle.bind(this)}>导航</button>
        <div style={style.divStyle} onClick={this.handleToggle.bind(this)}>
          <ul>
            <li style={style.liStyle}>first</li>
            <li style={style.liStyle}>secound</li>
            <li style={style.liStyle}>third</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
