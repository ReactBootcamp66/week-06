import React from 'react'; 
import './App.css';

import Button, { ButtonTypes } from './components/Button'; 

function App() {
  return (
    <div className="App">
     <Button type={ButtonTypes.Submit} text="Click me" onClick={() => {console.log('button clicked')}}/>
    </div>
  );
}

export default App;
