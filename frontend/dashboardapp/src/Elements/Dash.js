import React, {Component} from 'react';

import './App.css';

import BarCharts from './Widgets/BarCharts';
import Piechart from './Widgets/Piechart';
import Widget1 from './Widgets/Widget1';
import Widget2 from './Widgets/Widget2';


//import Compteur from './Widgets/Compteur';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dash.css"
import {Button, Alert, Card, Container, Row, Col } from 'react-bootstrap';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';



class Dash extends Component {

    render() {
        return (  
                      
          <div className="Container" id="container" >
                    
            <div className="row">
                    <div class=" col-sm-6 col-lg-4  " id="petit_container1"> 
                        <BarCharts/>
                    </div>
                    <div class=" col-sm-6 col-lg-4 " id="petit_container2">
                        <Piechart/>
                    </div>
                    <div class=" col-sm-6 col-lg-4 " id="petit_container3">
                        <Widget1/> 
                    </div>


                    <div class=" col-sm-6 col-lg-4 " id="petit_container1"> 
                        <Widget1/>
                    </div>
                    <div class=" col-sm-6 col-lg-4" id="petit_container2">
                        <Widget2/>
                    </div>
                    <div class=" col-sm-6 col-lg-4" id="petit_container3">
                        <PieChart/>
                    </div>
            </div>

          

          </div>
  );
}
}
export default Dash;


