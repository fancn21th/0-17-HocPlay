import React, { Component } from 'react';
import { compose, withState } from 'recompose'
import './App.css';

const overrideProps = (overrideProps) => (BaseComponent) => (props) => (
    <BaseComponent {...props} {...overrideProps}/>
)

const NormalComponent = withState('showTitle', 'setTitleVisible', true)(
    ({ name, showTitle, setTitleVisible }) => (
    <div className="box" onClick={() => setTitleVisible( x => !x )}>
        { showTitle && <h5>{name}</h5> }
    </div>
))

const alwaysBob = overrideProps({name: 'Bob'})

const NormalComponent2 = alwaysBob(NormalComponent)

class App extends Component {
  render() {
    const props = {
        name: 'Max'
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
