import { useLocation } from "react-router-dom";

export default function DealClinicSessionReport() {

  const location = useLocation();
  const report = location.state;

  return (
    <div className="p-10">

      <h1 className="text-3xl mb-8 font-semibold">
        Latest Deal Clinic Session Report
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold text-black">Strength</h2>
          <p className="text-black">{report?.strength}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold text-black">Weakness</h2>
          <p className="text-black">{report?.weakness}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="font-semibold text-black">Rating</h2>
          <p className="text-black">{report?.rating}/10</p>
        </div>

      </div>

      <button className="mt-8 bg-blue-500 px-6 py-3 rounded text-white">
        Listen my conversation
      </button>

    </div>
  );
}