import { useLocation } from "react-router-dom";

export default function CustomerSessionReport() {

  const location = useLocation();
  const report = location.state;

  return (
    <div className="p-10">

      <h1 className="text-3xl mb-8 font-semibold">
        Latest Customer Interaction Report
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold">Strength</h2>
          <p>{report?.strength}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold">Weakness</h2>
          <p>{report?.weakness}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold">Rating</h2>
          <p>{report?.rating}/10</p>
        </div>

      </div>

      <button className="mt-8 bg-blue-500 px-6 py-3 rounded text-white">
        Listen my conversation
      </button>

    </div>
  );
}