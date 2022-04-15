
import React from "react";
import '../App.js';
import { createTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';






class Stock extends React.Component {

  // Generate Sales Data
 createData = (time, amount) => {
  return { time, amount };
}

 data = [
  this.createData('00:00', 0),
  this.createData('03:00', 300),
  this.createData('06:00', 600),
  this.createData('09:00', 800),
  this.createData('12:00', 1500),
  this.createData('15:00', 2000),
  this.createData('18:00', 2400),
  this.createData('21:00', 2400),
  this.createData('24:00', undefined),
];

 theme = createTheme();

  render(){
    return (
      <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={this.data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={this.theme.palette.text.secondary}
            style={this.theme.typography.body2}
          />
          <YAxis
            stroke={this.theme.palette.text.secondary}
            style={this.theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: this.theme.palette.text.primary,
                ...this.theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={this.theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
    );
  }
}

export default Stock;



