import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";


const BarChartComponent = ({data}) => {
  
  const fillBars = (el) => {
    if (el <= 2.5) {
      return "green";
    } else if (el > 2.5 && el <= 5) {
      return "yellow";
    } else if (el > 5 && el <= 7.5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
          
     <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 20,
          bottom: 30,
        }}
        barSize={15}
        
      >
        <XAxis
          dataKey="mes"
          stroke="#c2dbec"
          scale="point"
          padding={{ left: 10, right: 10 }}
        >
          <Label value="Mes" fill="#c2dbec" position="bottom" />
        </XAxis>
        <YAxis dataKey="resultado" stroke="#c2dbec" values="">
          <Label value="ISH" fill="#c2dbec" position="insideLeft" />
        </YAxis>
        <Tooltip
          contentStyle={{
            backgroundColor: "#c2dbec",
            color: "#1c2548",
            width: 150,
            border: "none",
          }}
        />
        <CartesianGrid strokeDasharray="1 1" />
        <Bar dataKey="resultado" background={{ fill: "#c2dbec" }}>
          {data.map((el, index) => (
            <Cell key={`cell-${index}`} fill={fillBars(el.resultado)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    
  );
};

export default BarChartComponent;
