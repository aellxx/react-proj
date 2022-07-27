import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
  // states for UI update
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  
  // Save user input value to "toDo"
  const onChange = (event) => {
    setToDo(prev => event.target.value);
  }

  // Save new toDo to "toDos" state
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    } 
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo(prev => "");
  }

  // remove a toDo when done
  // x separate UI update needed
  const done = (event) => {
    event.preventDefault();
    // get toDo from parent element
    const jobDone = event.target.parentElement.id;
    // filter out
    setToDos(currentArray => currentArray.filter(item => item !== jobDone));
  }
  
  return (
    <div>
      <h1 className={styles.title}>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {
          toDos.map((toDo, index) => 
            <li key={index} id={toDo}>
              <span>{toDo} </span>
              <button onClick={done}>X</button>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;