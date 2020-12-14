import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

let nbEurope=0;
let nbAsie=0;
let nbAfrique=0;
let nbOceanie=0;
let nbAmerSud=0;
let nbAmerNord=0;

export default class Widget2 extends React.Component {

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xujpnxxp/';

    componentDidMount()
    {
   
        axios.get('http://localhost:4000/music/continent/Europe')
        .then(res => {
        for(var i=0; i<res.data.length; i++)
        {
            nbEurope+=res.data[i].nombreecoute;
        }
        this.setState({nbEurope})
        })

        axios.get('http://localhost:4000/music/continent/Asie')
        .then(res => {
            for(var i=0; i<res.data.length; i++)
            {
                nbAsie+=res.data[i].nombreecoute;
            }
        this.setState({nbAsie})
        })

        axios.get('http://localhost:4000/music/continent/Oceanie')
        .then(res => {
            for(var i=0; i<res.data.length; i++)
            {
                nbOceanie+=res.data[i].nombreecoute;
            }
        this.setState({nbOceanie})
        })

        axios.get('http://localhost:4000/music/continent/Afrique')
        .then(res => {
            for(var i=0; i<res.data.length; i++)
            {
                nbAfrique+=res.data[i].nombreecoute;
            }
        this.setState({nbAfrique})
        })

        axios.get('http://localhost:4000/music/continent/AmeriqueN')
        .then(res => {
            for(var i=0; i<res.data.length; i++)
            {
                nbAmerNord+=res.data[i].nombreecoute;
            }
        this.setState({nbAmerNord})
        })

        axios.get('http://localhost:4000/music/continent/AmeriqueS')
        .then(res => {
            for(var i=0; i<res.data.length; i++)
            {
                nbAmerSud+=res.data[i].nombreecoute;
            }
        this.setState({nbAmerSud})
        })
    }

    

    render() {

        const data =  [
            {continent: 'Europe', nbListen: nbEurope},
            {continent: 'Asie', nbListen: nbAsie},
            {continent: 'Afrique', nbListen: nbAfrique},
            {continent: 'Océanie', nbListen: nbOceanie},
            {continent: 'Amérique du Sud', nbListen: nbAmerSud},
            {continent: 'Amérique du Nord', nbListen: nbAmerNord}
        ]

        return (

            //<ResponsiveContainer  height="25%" >
                 <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="continent" />
                    <PolarRadiusAxis />
                    <Tooltip />
                    <Radar name="Nombre d'écoutes en millions" dataKey="nbListen" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            //</ResponsiveContainer>
        );
    }

}