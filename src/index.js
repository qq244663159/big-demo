import React from 'react';
import { render } from 'react-dom';
import App from './components/App'

class MyApp extends React.Component {
  render(){

    return(
      <App />
    )
  }
}
render(
  <App />,
  document.getElementById('root'));
