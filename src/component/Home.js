import { useState } from "react";
import { toast } from "react-toastify";
import "../styles/home.css"

const TodoList = () => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      toast.warning("Please enter a task");
      return;
    }

    try {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!loggedInUser) {
        toast.error("User not logged in");
        return;
      }

      const newTask = { task, userId: loggedInUser.id };

      const response = await fetch(
        `http://localhost:8000/users/${loggedInUser.id}/tasks`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTask),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      toast.success("Task added successfully");
      setTask("");
    } catch (err) {
      toast.error("Error: " + err.message);
    }
  };

  return (
    <div className="container">
      <div>
      <h1>Tasks</h1>
      </div>
     
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoList;
