import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold text-indigo-600 cursor-pointer" onClick={() => navigate("/")}>
        TaskManager
      </div>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/login")}
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
