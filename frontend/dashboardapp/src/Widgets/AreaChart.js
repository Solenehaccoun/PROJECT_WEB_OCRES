import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import axios from 'axios';

let nbEcou2010=0;
let nbEcou2012=0;
let nbEcou2014=0;
let nbEcou2016=0;
let nbEcou2018=0;
let nbEcou2020=0;
let dateMusic = new Date();
let yearMusic;



export default class Areachart extends PureComponent {

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';

  componentDidMount()
{
  axios.get('http://localhost:4000/music')
    .then(res => {
      for(var i=0; i<res.data.length; i++)
      {
        dateMusic=res.data[i].date;
        yearMusic=dateMusic.getFullYear;
        console.log('heoooo');
        if(yearMusic==2010)
        {
          nbEcou2010+=res.data[i].nombreecoute;
        }
      }
      this.setState({nbEcou2010})
    })

    axios.get('http://localhost:4000/music')
    .then(res => {
      nbEcou2012=res.data[2].nombreecoute;
      this.setState({nbEcou2012})
    })
    axios.get('http://localhost:3000/music/date/2014')
    .then(res => {
      nbEcou2014=res.data.length;
      this.setState({nbEcou2014})
    })
    axios.get('http://localhost:3000/music/date/2016')
    .then(res => {
      nbEcou2016=res.data.length;
      this.setState({nbEcou2016})
    })
    axios.get('http://localhost:3000/music/date/2018')
    .then(res => {
      nbEcou2018=res.data.length;
      this.setState({nbEcou2018})
    })
    axios.get('http://localhost:3000/music/date/2020')
    .then(res => {
      nbEcou2020=res.data.length;
      this.setState({nbEcou2020})
    })
}



  render() {

    const data = [
      {
        name: '2010', listens: nbEcou2010,
      },
      {
        name: '2012', listens: nbEcou2012,
      },
      {
        name: '2014', listens: nbEcou2014,
      },
      {
        name: '2016', listens: nbEcou2016,
      },
      {
        name: '2018', listens: nbEcou2018,
      },
      {
        name: '2020', listens: nbEcou2020,
      },
    ];

    return (
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area name ="nombre d'écoutes depuis 2010" type="monotone" dataKey="listens" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }
}
