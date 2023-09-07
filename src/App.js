import logo from "./logo.svg";
import "./App.css";
import Complete from "./Complete/Complete";
import Incomplete from "./Incomplete/Incomplete";
import Header from "./Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [citems, setCitems] = useState([]);
  function addItem(inputData) {
    if (inputData) {
      setItems([...items, inputData]);
      // setInputData("");
    }
  }

  function addCitem(item, inx) {
    if (item) {
      console.log("addCitem");

      setCitems([...citems, item]);
      const newItems = items.filter((elem, ind) => {
        return ind != inx;
      });

      setItems(newItems);
    }
  }

  function deleteItem(id) {
    console.log(id);
    const updatedItems = items.filter((elem, ind) => {
      return ind != id;
    });

    setItems(updatedItems);
  }
  function deleteCitem(id) {
    console.log(id);
    const updatedItems = citems.filter((elem, ind) => {
      return ind != id;
    });

    setCitems(updatedItems);
  }

  function addInitem(ele, inx) {
    if (ele) {
      console.log("addInitem");
      setItems([...items, ele]);
      const newInItems = citems.filter((elem, ind) => {
        return ind != inx;
      });

      setCitems(newInItems);
    }
  }

  return (
    <div className="main">
      <Header changeInputData={addItem} />
      <Routes>
        <Route
          path="/incomplete"
          // element={<Incomplete itemind={deleteItem} />}
          element={
            <Incomplete
              items={items}
              itemind={deleteItem}
              itemCind={addCitem}
            />
          }
        />
        <Route
          path="/complete"
          element={
            <Complete
              items={citems}
              itemind={deleteCitem}
              itemInind={addInitem}
            />
          }
        />
      </Routes>
      {/* <Link className="btn-input" to="/incomplete">
        Incompleted Items
      </Link> */}
    </div>
  );
}

export default App;
