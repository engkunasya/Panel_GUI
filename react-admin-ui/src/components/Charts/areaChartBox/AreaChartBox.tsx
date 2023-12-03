import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./AreaChartBox.scss";

const data = [
  {
    name: "Sun",
    other: 4000,
    ev_car: 2400,
    fuel_car: 2400,
  },
  {
    name: "Mon",
    other: 3000,
    ev_car: 1398,
    fuel_car: 2210,
  },
  {
    name: "Tue",
    other: 2000,
    ev_car: 9800,
    fuel_car: 2290,
  },
  {
    name: "Wed",
    other: 2780,
    ev_car: 3908,
    fuel_car: 2000,
  },
  {
    name: "Thu",
    other: 1890,
    ev_car: 4800,
    fuel_car: 2181,
  },
  {
    name: "Fri",
    other: 2390,
    ev_car: 3800,
    fuel_car: 2500,
  },
  {
    name: "Sat",
    other: 3490,
    ev_car: 4300,
    fuel_car: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="fuel_car"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="ev_car"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="other"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
