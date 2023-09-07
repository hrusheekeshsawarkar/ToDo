import { Routes, Route, Link } from "react-router-dom";
import "./Complete.css";

const Complete = (props) => {
  return (
    <div className="main">
      <h1>Completed Items</h1>
      <div className="items">
        {props.items.map((elem, ind) => {
          return (
            <div className="eachItem" key={ind}>
              <h3>{elem}</h3>
              <div>
                <button
                  className="but"
                  onClick={() => props.itemInind(elem, ind)}
                >
                  <i className="fa-solid fa-xmark"></i>
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
      <Link className="btn-input" to="/incomplete">
        Incompleted Items
      </Link>
    </div>
  );
};

export default Complete;
