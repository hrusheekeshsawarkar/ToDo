import { Routes, Route, Link } from "react-router-dom";

import "./Incomplete.css";

const Incomplete = (props) => {
  return (
    <div className="main">
      <h1>Incomplete Items</h1>

      <div className="items">
        {props.items.map((elem, ind) => {
          return (
            <div className="eachItem" key={ind}>
              <h3>{elem}</h3>
              <div>
                <button
                  className="but"
                  onClick={() => props.itemCind(elem, ind)}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button className="but" onClick={() => props.itemind(ind)}>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                  ></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Link className="btn-input" to="/complete">
        Completed Items
      </Link>
    </div>
  );
};

export default Incomplete;
