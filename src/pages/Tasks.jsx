import { useEffect, useState } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const getTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks", {
      params: { search, status },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    });
    setTasks(res.data);
  };

  useEffect(() => {
    getTasks();
  }, [search, status]);

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <div className="flex gap-4 mb-6">
        <input
          className="border p-3 rounded w-full"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-white p-4 rounded-lg shadow mb-3"
        >
          <h3 className="font-semibold text-lg">{task.title}</h3>
          <p className="text-sm text-gray-500">
            Status: {task.status}
          </p>
        </div>
      ))}

    </div>
  );
};

export default Tasks;
