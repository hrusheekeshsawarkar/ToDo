import { useState } from "react";
import { ReactComponent as YourSvg } from "./restaverse-logo-2-1.svg";
import "./Header.css";

const Header = (props) => {
  const [inputData, setInputData] = useState("");

  function sendItem(inputData) {
    props.changeInputData(inputData);
    setInputData("");
  }

  return (
    <div>
      <YourSvg style={{ margin: "20px" }} />
      <div className="main-head">
        <div className="content">
          <h1>ToDo List</h1>
          <p>Add Items</p>
        </div>
        <div className="cont">
          <input
            className="input"
            type="text"
            value={inputData}
            label="item"
            placeholder="shopping"
            onChange={(e) => {
              setInputData(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Add Item"
            onClick={() => sendItem(inputData)}
            className="btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
