import { useState } from "react";
import "./App.css";

function Todo() {
  const [todos, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Incomplete");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task=== "") {
      alert("Task name is required.");
    } else {
      const newTodo = { task: task, status: status, date: date };
      setTodo([...todos, newTodo]);
      setTask("");
      setDate(new Date());
    }
  };

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  return (
    <>
    
      <div className="container">
        <h1 className="todo-heading">TODO APP</h1>
        <div className="form">
  
          <form onSubmit={handleSubmit}>
            <input
              required
              placeholder="Task name"
              type="text"
              value={task}
              onChange={(event) => {
                setTask(event.target.value);
              }}
            />

            <select className="mt-2"
              value={status}
              onChange={(event) => {
                setStatus(event.target.value);
              }}
            >
              <option value="Incomplete">Incomplete</option>
              <option value="complete">Complete</option>
              <option value="pending">Pending</option>
            </select>
            <button type="submit" className="mt-2 ml-2 bg-blue-200">Submit</button>
          </form>
        </div>
        <div className="list">

          <table className="todo-table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((item, index) => (
                <tr key={index}>
                  <td>{item.task}</td>
                  <td>{item.status}</td>
                  <td>{formatTime(item.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Todo;
