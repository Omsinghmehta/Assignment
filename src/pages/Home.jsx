import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20">


        <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Manage Your Tasks Efficiently
          </h1>
          <p className="text-white text-lg mb-6">
            Organize your daily tasks, track progress, and stay productive with our secure and easy-to-use dashboard.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </div>
        </div>


        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2907/2907253.png"
            alt="Tasks Illustration"
            className="w-80 md:w-full"
          />
        </div>

      </div>

    </div>
  );
};

export default Home;
