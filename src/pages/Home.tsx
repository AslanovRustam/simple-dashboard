import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center  text-center px-4 m-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to Manufacturing Dashboard
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Monitor production lines, orders and productivity in real time.
      </p>
      <Link
        to="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
      >
        Go to dashboard
      </Link>
    </div>
  );
}
