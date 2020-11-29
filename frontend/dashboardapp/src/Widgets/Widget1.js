import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

class Widget1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: [
                    {name: 'Lun', nbListen: 14},
                    {name: 'Mar', nbListen: 13},
                    {name: 'Mer', nbListen: 18},
                    {name: 'Jeu', nbListen: 10},
                    {name: 'Ven', nbListen: 12},
                    {name: 'Sam', nbListen: 8},
                    {name: 'Dim', nbListen: 5}
                ]
            }
        }
    

    render() {
        return (
            <ResponsiveContainer>
            <div className="chart">
                <LineChart width={600} height={300} data={this.state.chartData}>
                    <Line type="monotone" name="Nombre d'écoutes (en Millions)" dataKey="nbListen" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend />
                    <Tooltip />
                </LineChart>
            </div>
            </ResponsiveContainer>
        );
    }

}

export default Widget1;