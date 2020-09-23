import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

class Chart extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <h2>Most Searched Players</h2>
        <BarChart
          className="chart"
          width={500}
          height={300}
          data={this.props.players}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="searches" fill="#ab91bf" />
        </BarChart>
      </div>
    );
  }
}

export default Chart;
