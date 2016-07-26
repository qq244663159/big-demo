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
    let show = this.state.show ? "none" : "block";
    return{
      navStyle:{
        width:'50px',
        height:'30px',
        fontWeight:'900',
        fontSize:'40px',
        display:'block',
        textAlign:'center',
        lineHeight:'30px',
        position:'absolute',
        top:'50px',
        left:'50px',
        color:'black',
        textDecoration:'none'
      },
      smallStyle:{
        width:'300px',
        height:'1000px',
        position:'fixed',
        top:'0',
        left:'0',
        padding:'0',
        backgroundColor:'#00bcd4',
        opacity:'1'

      },
      liStyle:{
        listStyle:'none',
        lineHeight:'50px',

        width:'100%',
        height:'50px',
        fontSize:'30px',
        fontWeight:'900',
        margin:'30px 0 30px 30px',
      },
      liFirst:{
        marginTop:'100px'
      },
      divStyle:{
        display:show,
        position:'absolute',
        top:'0',
        left:'0',
        bottom:'0',
        right:'0',
        backgroundColor:'#ccc',
        opacity:'0.5',

      },
      aStyle:{
        color:'white',
        textDecoration:'none'
      }
    }
  }
  render(){
    let style = this.getStyles();
    return(
      <div>
        <a href="#" style={style.navStyle} onClick={this.handleToggle.bind(this)}>≡</a>
        <div style={style.divStyle}  onClick={this.handleToggle.bind(this)}>
          <div style={style.smallStyle}>
            <ul style={style.liFirst}>
              <li style={style.liStyle}><a href="#" style={style.aStyle}>目录</a></li>
              <li style={style.liStyle}><a href="#" style={style.aStyle}>帮助</a></li>
              <li style={style.liStyle}><a href="#" style={style.aStyle}>联系我</a></li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
