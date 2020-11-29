import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

class Widget2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: [
                    {continent: 'Europe', nbListen: 165},
                    {continent: 'Asie', nbListen: 78},
                    {continent: 'Afrique', nbListen: 36},
                    {continent: 'Océanie', nbListen: 79},
                    {continent: 'Amérique du Sud', nbListen: 85},
                    {continent: 'Amérique du Nord', nbListen: 129}
            ]
        }
    }
    

    render() {
        return (
            <div className="chart">
                 <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={this.state.chartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="continent" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="nbListen" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </div>
        );
    }

}

export default Widget2;