import React from 'react';

let Lists = [
  {title:'1', date:'2016.7.26'},
  {title:'2', date:'2016.7.27'},
  {title:'3', date:'2016.7.28'},
  {title:'4', date:'2016.7.29'},
]
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
        backgroundColor:'#00bcd4',
        float:'left',
        marginTop:'20px',
        textAlign:'center',
        lineHeight:'100px',
        boxShadow:'5px 5px 5px #ccc'
      },
      listRightStyle:{
        width:'80%',
        height:'100px',
        backgroundColor:'white',
        float:'left',
        fontSize:'26px',
        textAlign:'center',
        lineHeight:'100px',
        marginTop:'20px',
        boxShadow:'5px 5px 5px #ccc'
      },
    }
  }
  render(){
  //   for(var i = 0;i < List.length;i++){
  //
  //   }
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
