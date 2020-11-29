import React from 'react';
import BarCharts from '../Widgets/BarCharts';
import Piechart from '../Widgets/Piechart';
import Widget1 from '../Widgets/Widget1';
import Widget2 from '../Widgets/Widget2';

function Dashboard() {
  return (
    <div className='dashboard'>
        <h1>Mes Widgets</h1>
        <div><Widget1/></div>
        <div><Widget2/></div>
        <div><BarCharts/></div>
        <div><Piechart/></div>
    </div>
  );
}

export default Dashboard;