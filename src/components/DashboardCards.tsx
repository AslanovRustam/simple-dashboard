import { useEffect, useState } from "react";
import api from "../services/api";
import { Line } from "../types";

export default function DashboardCards() {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    api.get("/lines").then((res) => setLines(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {lines.map((line) => (
        <div key={line.id} className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-bold">{line.name}</h2>
          <p
            className={`mt-2 font-semibold ${
              line.status === "Works" ? "text-green-600" : "text-red-600"
            }`}
          >
            {line.status}
          </p>
        </div>
      ))}
    </div>
  );
}
