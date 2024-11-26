import { useState } from "react";

function Todo() {
  const [todos, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Incomplete");
  const [date, setDate] = useState(new Date());
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === "") {
      alert("Task name is required.");
    } else if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { ...todo, task, status, date } : todo
      );
      setTodo(updatedTodos);
      setEditIndex(null);
    } else {
      setTodo([...todos, { task, status, date }]);
    }
    setTask("");
    setDate(new Date());
  };

  const handleEdit = (index) => {
    setTask(todos[index].task);
    setStatus(todos[index].status);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTodo(todos.filter((_, i) => i !== index));
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, status: newStatus } : todo
    );
    setTodo(updatedTodos);
  };

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <div className='w-full  h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center px-4'>
      <div className='flex flex-col lg:flex-row gap-8 w-full max-w-7xl'>
        <div className='lg:w-1/2 w-full bg-gray-700 p-6 rounded-lg shadow-lg'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input
              required
              placeholder='Enter your task'
              type='text'
              value={task}
              onChange={(event) => setTask(event.target.value)}
              className='w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className='w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
            >
              <option value='Incomplete'>Incomplete</option>
              <option value='Complete'>Complete</option>
              <option value='Pending'>Pending</option>
            </select>
            <button
              type='submit'
              className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300'
            >
              {editIndex !== null ? "Update Task" : "Add Task"}
            </button>
          </form>
        </div>
        <div className='lg:w-1/2 w-full bg-gray-700 p-6 rounded-lg shadow-lg overflow-auto'>
          {todos.length > 0 ? (
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-gray-800 text-gray-200'>
                  <th className='p-4 border border-gray-600'>Task</th>
                  <th className='p-4 border border-gray-600'>Status</th>
                  <th className='p-4 border border-gray-600'>Time</th>
                  <th className='p-4 border border-gray-600'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      item.status === "Complete"
                        ? "bg-green-800 text-white"
                        : item.status === "Pending"
                        ? "bg-yellow-800 text-white"
                        : "bg-red-800 text-white"
                    }`}
                  >
                    <td className='p-4 border border-gray-600'>{item.task}</td>
                    <td className='p-4 border border-gray-600'>
                      <p>{item.status}</p>
                    </td>
                    <td className='p-4 border border-gray-600'>
                      {formatTime(item.date)}
                    </td>
                    <td className='p-4 border border-gray-600 flex justify-center gap-2'>
                      <button
                        onClick={() => handleEdit(index)}
                        className='px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300'
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className='px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className='text-center text-gray-400'>No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
