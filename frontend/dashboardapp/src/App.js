import React from 'react';
import './App.css';

import Widget1 from './Widgets/Widget1';
import Widget2 from './Widgets/Widget2';

function App() {
  return (
    <div className="App">
      <h1>Mes Widgets</h1>
      <div><Widget1/></div>
      <div><Widget2/></div>
    </div>
  );
}

export default App;
