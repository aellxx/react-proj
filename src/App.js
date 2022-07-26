import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyWord] = useState("");

  const onClick = () => {
    setValue((prev) => prev+1);
  }
  const onChange = (event) => {
    setKeyWord(event.target.value);
  }

  console.log('I run all the time');
  // run every time counter changes
  useEffect(
    () => {console.log("COUNT:", counter);}, 
    [counter]);

  // run every time keyword changes
  useEffect(
    () => {
      if (keyword !== "" && keyword.length > 5){
        console.log("SEARCH FOR", keyword);
      }
    },
    [keyword] // run every time the keyword changes
  )

  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;