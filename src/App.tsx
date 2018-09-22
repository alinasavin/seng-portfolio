import * as React from 'react';
import './App.css';

import Landing from './sections/landing/landing';
import About from './sections/about/about';
import Experience from './sections/experience/experience';

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Landing />
        <About />
        <Experience />
      </div>
    );
  }
}

export default App;
