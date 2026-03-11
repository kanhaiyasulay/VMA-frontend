import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", score: 60 },
  { day: "Tue", score: 65 },
  { day: "Wed", score: 75 },
  { day: "Thu", score: 70 },
  { day: "Fri", score: 85 }
];

export default function CustomerReport() {

  return (
    <div className="p-10">

      <h1 className="text-3xl mb-8 font-semibold">
        Customer Interaction Performance
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold mb-2">Strength</h2>
          <p>Good product explanation</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold mb-2">Weakness</h2>
          <p>Needs improvement in objection handling</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold mb-2">Rating</h2>
          <p>7.5 / 10</p>
        </div>

      </div>

      <div className="bg-white shadow p-6 rounded-lg">

        <h2 className="text-xl mb-4">
          Progress Over Time
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day"/>
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#2563eb"/>
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}