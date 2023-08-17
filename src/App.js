import "./App.css";
import { useCallback, useRef, useState } from "react";

function App() {
  const [data, setData] = useState({});

  const usernameRef = useRef();
  const passwordRef = useRef();

  // const handleInputChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  const handleSubmit = useCallback(() => (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    setData({ username, password });
  });

  // const handleSubmit = () => {
  //   console.log("Data", data);
  // }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          // onChange={(e) => handleInputChange(e)}
          ref={usernameRef}
        ></input>
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="Enter the password"
          // onChange={(e) => handleInputChange(e)}
          ref={passwordRef}
        ></input>
        <br></br>
        <button type="submit" onClick={handleSubmit()}>
          Submit
        </button>
      </form>

      {data && <p>Hello {data.username}!</p>}
    </div>
  );
}

export default App;
