import { useState } from "react";
import "./App.css";
import ToDOList from "./ToDOList";

function App() {
  const [inputData, setInputData] = useState("");
  const [Items, setItemList] = useState([]);

  const inputEvent = (event) => {
    setInputData(event.target.value);
  };

  const button = () => {
    setItemList((oldData) => {
      return [...oldData, inputData];
    });
    setInputData("");
  };

  const Delete = (id) => {
    setItemList((oldData) => oldData.filter((arr, index) => index !== id));
  };

  const Edit =()=>{
    
  }

  return (
    <>
      <div className="main_div">
        <center>
          <div className="center_div">
            <h1 className="heading">ToDo List</h1>
            <div className="new_div">
              <div>
                <input
                  type="text"
                  placeholder="Add your Item here"
                  value={inputData}
                  onChange={inputEvent}
                ></input>
              </div>
              <div>
                <button onClick={button}> + </button>
              </div>
            </div>

            <ol>
              {Items.map((list, index) => (
                <ToDOList
                  text={list}
                  key={index}
                  id={index}
                  onSelect={Delete}
                  onEdit={Edit}
                />
              ))}
            </ol>
          </div>
        </center>
      </div>
    </>
  );
}

export default App;
