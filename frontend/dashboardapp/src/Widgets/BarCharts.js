import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


class BarCharts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData:  [
                {name:'Ariana', value: 56600},
                {name:'Dua Lipa', value: 1500},
                {name:'Black Pumas', value: 2000},
                {name:'Tokyo Hotel', value: 800},
                ]
            }
        }
    

    render() {
        return (
            
            <ResponsiveContainer>
            <div className="chart">
                <BarChart
                            width={500}
                            height={300}
                            data={this.state.chartData}
                            margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                            }}
                            barSize={20}>

                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis /> 
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar name="nombre d'écoutes" dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
           
            </ResponsiveContainer>
        );
    }

}

export default BarCharts;