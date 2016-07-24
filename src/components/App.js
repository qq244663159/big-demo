
import React from 'react';
import Header from './header';
import List from './list';
import Nav from './nav'

class App extends React.Component {
  getStyles(){
    return{
      style:{
        margin:'0',
        padding:'0'
      }
    }
  }
  render(){
    let style = this.getStyles();
    return(
      <div style={style.style}>
        <Header />
        <Nav />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    )
  }
}

export default App;
