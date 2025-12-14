import Navbar from "../components/Navbar";
import Tasks from "./Tasks";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-8">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your tasks and track your progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Tasks</h3>
            <p className="text-3xl font-bold text-indigo-600">12</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-3xl font-bold text-yellow-500">7</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Completed</h3>
            <p className="text-3xl font-bold text-green-500">5</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <Tasks />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
