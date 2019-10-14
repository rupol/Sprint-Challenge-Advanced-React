import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class Chart extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <h2>Top Women's Searches</h2>
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
          <Bar dataKey="searches" fill="#f0ddff" />
        </BarChart>
      </div>
    );
  }
}

export default Chart;
