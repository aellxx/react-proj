import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  
  const onChange = (event) => {
    // toDo = user input value 
    setToDo(prev => event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    } 
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo(prev => "");
  }

  const done = (event) => {
    event.preventDefault();
    const jobDone = event.target.parentElement.id;
    setToDos(currentArray => currentArray.filter(item => item !== jobDone));
    console.log(toDos);
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
              <span>{toDo}</span>
              <button onClick={done}>X</button>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;