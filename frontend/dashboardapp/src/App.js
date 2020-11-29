import React from 'react';
import { PieChart } from 'recharts';
import './App.css';

import BarCharts from './Widgets/BarCharts';
import Piechart from './Widgets/Piechart';
import Widget1 from './Widgets/Widget1';
import Widget2 from './Widgets/Widget2';
import Widget3 from './Widgets/Widget3';





function App() {
  return (
    <div className="App">
      <h1>Mes Widgets</h1>
      <div><Widget1/></div>
      <div><Widget2/></div>
<<<<<<< HEAD
      <div><Widget3/></div>
=======
      <div><BarCharts/></div>
      <div><Piechart/></div>
     {/* <div id="timer-example"></div> */}
    

>>>>>>> 31604a0ed968320bf9e2a588a3f0ae71860827c7
    </div>
  );
}

export default App;

