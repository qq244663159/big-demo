import React from 'react';


class List extends React.Component{
  getStyles(){
    return{
      listStyle:{
        width:'80%',
        margin:'0 auto',
        clear:'both'
      },
      listLeftStyle:{
        width:'20%',
        height:'100px',
        backgroundColor:'blue',
        float:'left',
        marginTop:'20px',
        textAlign:'center',
        lineHeight:'100px'
      },
      listRightStyle:{
        width:'80%',
        height:'100px',
        backgroundColor:'#ccc',
        float:'left',
        fontSize:'26px',
        textAlign:'center',
        lineHeight:'100px',
        marginTop:'20px',
      },
    }
  }
  render(){
    let style = this.getStyles();
    return(
      <div style={style.listStyle}>
        <h2 style={style.listLeftStyle}>
          第xxx期
        </h2>
        <div style={style.listRightStyle}>
          第xxx期内容
        </div>
      </div>
    )
  }
}

export default List
