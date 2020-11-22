import React from 'react';
import './App.css';

import Button, { ButtonTypes } from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>React Bootcamp 66</h1>
      <Button
        type={ButtonTypes.Submit}
        text="Click me"
        onClick={() => {
          console.log('button clicked');
        }}
      />
    </div>
  );
}

export default App;
