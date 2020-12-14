import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import axios from 'axios';

let nbOutkast=0;
let nbQueen=0;
let nbMac=0;
let nbPatrickBruel=0;


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value} musiques`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  componentDidMount()
    {
        axios.get('http://localhost:4000/music/artiste/Outkast')
        .then(res => {
        nbOutkast=res.data.length;
        this.setState({nbOutkast})
        })

        axios.get('http://localhost:4000/music/artiste/MacMiller')
        .then(res => {
        nbMac=res.data.length;
        this.setState({nbMac})
        })

        axios.get('http://localhost:4000/music/artiste/Queen')
        .then(res => {
        nbQueen=res.data.length;
        this.setState({nbQueen})
        })

        axios.get('http://localhost:4000/music/artiste/PatrickBruel')
        .then(res => {
        nbPatrickBruel=res.data.length;
        this.setState({nbPatrickBruel})
        })
    }

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };


  render() {

    const data = [
      { name: 'Outkast', value: nbOutkast},
      { name: 'Mac Miller', value: nbMac },
      { name: 'Queen', value: nbQueen},
      { name: 'PatrickBruel', value: nbPatrickBruel },
    ];

    return (
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
    );
  }
}
