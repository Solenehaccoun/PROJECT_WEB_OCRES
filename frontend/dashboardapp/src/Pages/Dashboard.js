import React, { Component } from 'react';
import BarCharts from '../Widgets/BarCharts';
import Piechart from '../Widgets/Piechart';
import Widget1 from '../Widgets/Widget1';
import Widget2 from '../Widgets/Widget2';


import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Dashboard extends Component {
     
        render() {
        return (
           <div class = "Container">
                <div class="Row">
                   <div class="Col-sm-4"> </div>
                   <div class="Col-sm-8">
                        <div class="Row">
                            <div class = "Container">
                                <div class="Col-xs-6-md-8"> <Widget1/> </div> 
                                <div class="Col-xs-6-md-8"><BarCharts/></div>
                            </div>
                        </div>      
                    </div>
                </div>
                      <Row>
                    
              <div class="Col-sm"><Piechart/></div>
              <div class="Col-sm-4"> <Widget2/> </div> 
          
               </Row>
            </div>
             
        )
    }
}


export default Dashboard;

        /*  <div><Widget2/></div>
        <div><BarCharts/></div>
        <div><Piechart/></div>*/

/*import React from 'react';
import BarCharts from '../Widgets/BarCharts';
import DonnutCharts from '../Widgets/DonnutCharts';
import Piechart from '../Widgets/Piechart';
import Widget1 from '../Widgets/Widget1';
import Widget2 from '../Widgets/Widget2';
import AreaChart from '../Widgets/AreaChart';

function Dashboard() {
  return (
    <div className='dashboard'>
        <h1>Mes Widgets</h1>
        <div><Widget1/></div>
        <div><Widget2/></div>
        <div><BarCharts/></div>
        <div><AreaChart/></div>
        <div><DonnutCharts/></div>
        <div><Piechart/></div>
    </div>
  );
}

export default Dashboard; */