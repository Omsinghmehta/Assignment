import { useEffect, useState } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const getTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/tasks", {
        params: { search, status },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, [search, status]);

  return (
    <div className="p-5">

      <div className="flex gap-3 mb-4">
        <input
          placeholder="Search task"
          className="border p-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="border p-3 mb-2">
            <h3 className="font-bold">{task.title}</h3>
            <p>Status: {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Tasks;
