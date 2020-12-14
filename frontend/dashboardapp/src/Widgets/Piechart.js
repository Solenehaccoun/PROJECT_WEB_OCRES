import React, { PureComponent } from 'react';
import {PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer} from 'recharts';
import axios from 'axios';

let nbPop=0;
let nbRap=0;
let nbRnB=0;
let nbHouse=0;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  componentDidMount()
    {
        axios.get('http://localhost:4000/music/genre/Pop')
        .then(res => {
        nbPop=res.data.length;
        this.setState({nbPop})
        })

        axios.get('http://localhost:4000/music/genre/Rap')
        .then(res => {
        nbRap=res.data.length;
        this.setState({nbRap})
        })

        axios.get('http://localhost:4000/music/genre/RnB')
        .then(res => {
        nbRnB=res.data.length;
        this.setState({nbRnB})
        })

        axios.get('http://localhost:4000/music/genre/House')
        .then(res => {
        nbHouse=res.data.length;
        this.setState({nbHouse})
        })
    }

  render() {

    const data = [
      { name: 'Pop', value: nbPop },
      { name: 'Rap', value: nbRap },
      { name: 'RnB', value: nbRnB },
      { name: 'House', value: nbHouse },
    ];
    

    return (

      
      //<ResponsiveContainer  height="25%">
      <PieChart width={400} height={400}>
        <Legend />
        
        <Pie 
          title = "Popularité des Genres Musicaux (en %)"
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
      //</ResponsiveContainer>
    );
  }
}
