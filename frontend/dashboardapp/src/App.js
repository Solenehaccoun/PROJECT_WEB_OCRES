import React from 'react';
import './App.css';

import Widget1 from './Widgets/Widget1';
import Widget2 from './Widgets/Widget2';
import Widget3 from './Widgets/Widget3';

function App() {
  return (
    <div className="App">
      <h1>Mes Widgets</h1>
      <div><Widget1/></div>
      <div><Widget2/></div>
      <div><Widget3/></div>
    </div>
  );
}

export default App;

