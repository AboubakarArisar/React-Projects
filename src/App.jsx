import { useState } from 'react';
import './App.css';

function App() {
  const [friendName, setFriendName] = useState("");
  const [friendsList, setFriendsList] = useState([]);

  return (
    <div className="container">
      <h1>Assignment Question no 6</h1>

      <div className="box">
        <form
          onSubmit={function (event) {
            event.preventDefault();
            setFriendsList([...friendsList, friendName]);
            setFriendName("");
          }}
        >
          <input
            type="text"
            placeholder='friend name'
            value={friendName}
            onChange={function (event) {
              setFriendName(event.target.value);
            }}
          />
          <input id='button' type="submit" value="Save" />
        </form>
   
      </div>
      <div className='list'>
        <h2>Friends list</h2>
          <ul>
            {friendsList.map((friend, index) => (
              <li key={index}>{friend}</li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default App;
