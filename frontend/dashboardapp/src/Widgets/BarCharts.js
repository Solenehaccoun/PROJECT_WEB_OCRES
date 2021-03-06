import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

let nbAriana=0;
let nbKygo=0;
let nbEminem=0;
let nbCudder=0;

export default class BarCharts extends React.Component {

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xujpnxxp/';

    componentDidMount()
    {
   
        axios.get('http://localhost:4000/music/artiste/Ariana')
        .then(res => {
        for(var i=0; i<res.data.length; i++)
        {
            nbAriana+=res.data[i].nombreecoute;
        }
        this.setState({nbAriana})
        })

        axios.get('http://localhost:4000/music/artiste/Kygo')
        .then(res => {
            for(var i=0; i<res.data.length; i++)
            {
                nbKygo+=res.data[i].nombreecoute;
            }
        this.setState({nbKygo})
        })

        axios.get('http://localhost:4000/music/artiste/Eminem')
        .then(res => {
            for(var i=0; i<res.data.length; i++)
            {
                nbEminem+=res.data[i].nombreecoute;
            }
        this.setState({nbEminem})
        })

        axios.get('http://localhost:4000/music/artiste/Cudder')
        .then(res => {
            for(var i=0; i<res.data.length; i++)
            {
                nbCudder+=res.data[i].nombreecoute;
            }
        this.setState({nbCudder})
        })
    }
    

    render() {

        
    console.log("NB ECOUTE ARIANA = "+nbAriana);
    console.log("NB ECOUTE EMINEM = "+nbEminem);

        const data = [
            {name:'Ariana', value: nbAriana},
            {name:'Kygo', value: nbKygo},
            {name:'Eminem', value: nbEminem},
            {name:'Cudder', value: nbCudder},
        ]

        return (
                <BarChart
                            width={500}
                            height={250}
                            data={data}
                            margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                            }}
                            barSize={20}>

                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis /> 
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar name="nombre d'écoutes par artiste" dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
        );
    }

}
