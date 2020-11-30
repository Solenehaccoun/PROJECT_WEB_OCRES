import React, { Component } from 'react';
import BarCharts from '../Widgets/BarCharts';
import Piechart from '../Widgets/Piechart';
import Widget1 from '../Widgets/Widget1';
import Widget2 from '../Widgets/Widget2';
import DonnutCharts from '../Widgets/DonnutCharts';
import AreaChart from '../Widgets/AreaChart';
import './Dashboard.css'; 
import Background from './Images/background.jpg';


import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Dashboard extends Component {
     
        render() {
        return (
           <div classname='fullpage' class = "Container" style={{
            backgroundImage: "url(" + { Background } + ")",
          }}>
            <Row classname='firstRow'>
                <div name="widget1" class="Col-xs-6-md-8"> <Widget1/> </div> 
                <div class="Col-sm-4"><BarCharts/></div>
                <div class="Col-xs-6-md-8"><DonnutCharts/></div>
                <div class="Col-sm"><Piechart/></div>
                <div class="Col-sm-4"> <Widget2/> </div> 
                <div class="Col-sm-4"> <AreaChart/> </div> 
            </Row>
            </div>
             
        )
    }
}


export default Dashboard;

/*
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
                */



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