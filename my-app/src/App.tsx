import React, {useState} from "react";
import './App.css';
import { Display } from "./display";

function App() {


    let [counter, setCounter] = useState (0);

 const increment = () =>setCounter(++counter)
 const reset = () => setCounter(0)

  return(
      <div className="container">
          <Display
              increment = {increment}
              reset = {reset}
              counter = {counter}
          />
      </div>
  )
}
export default App;
