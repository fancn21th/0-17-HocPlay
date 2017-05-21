import React, { Component } from 'react';
import './App.css';

const hoc = (BaseComponent) => (props) => (
    <BaseComponent {...props} />
)

const NormalComponent = ({ name }) => (
    <div className="box">
        {name}
    </div>
)

const NormalComponent2 = hoc(NormalComponent)

class App extends Component {
  render() {
    const props = {
        name: 'max'
    }
    return (
      <div>
          <NormalComponent {...props} />
          <NormalComponent2 name="Joe"/>
      </div>
    );
  }
}

export default App;
