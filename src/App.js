import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function Hello() {
  // function to run when component is destroyed
  useEffect(() => {
    console.log("hi")
    return () => console.log("bye");
  }, []);

  return <h1>hi</h1>
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyWord] = useState("");

  const onClick = () => {
    // increment click count and update UI
    setValue((prev) => prev+1);
  }
  const onChange = (event) => {
    // saving the user input to the state "keyword"
    setKeyWord(event.target.value);
  }

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
    [keyword] 
  );

  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing(prev => !prev);

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

      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide": "Show"}</button>
    </div>
  );
}

export default App;