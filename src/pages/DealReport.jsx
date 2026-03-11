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
  { day: "Mon", score: 55 },
  { day: "Tue", score: 60 },
  { day: "Wed", score: 65 },
  { day: "Thu", score: 72 },
  { day: "Fri", score: 80 }
];

export default function DealReport() {

  return (
    <div className="p-10">

      <h1 className="text-3xl mb-8 font-semibold">
        Deal Clinic Performance
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold mb-2">Strength</h2>
          <p>Good negotiation strategy</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold mb-2">Weakness</h2>
          <p>Needs better closing technique</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold mb-2">Rating</h2>
          <p>8 / 10</p>
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
            <Line type="monotone" dataKey="score" stroke="#10b981"/>
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}