import Display from "./components/Display";
import "./index.css";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import Beer from "./components/beerOfTheDay";
// ? import { FaSolid, FaPlus } from "react-icons/fa";

// import { motion } from "framer-motion";
// !!  npm install framer-motion for animations

const App = () => {
  // DISPLAY
  // INPUT
  const [input, setInput] = useState("");
  // DISPLAY LIST
  const [toDo, setToDo] = useState([]);
  // DELETED LIST
  // const [trash, setTrash] = useState([]);
  ///////////////////
  // **RANDOM BEER
  const [randomBeer, setRandomBeer] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  ///////////
  //! FETCH
  let handleFetch = async () => {
    try {
      setError(false);
      let response = await fetch("https://api.punkapi.com/v2/beers/random");
      if (response.status !== 200) {
        throw new Error(error);
      }
      let data = await response.json();
      setRandomBeer(data);
      console.log(data);
    } catch (error) {
      console.log("error", error);
      setError({ error: true, message: error.message });
    }
  };

  // input
  const addHandler = (event) => {
    setInput(event.target.value);
  };

  // **SUBMIT BUTTON
  const handleClick = () => {
    let storedList = [...toDo];
    storedList.push(input);
    setToDo(storedList);
    setInput("");
    // setToDo([...toDo, { input }]);
  };

  //! DELETE FROM TO DO LIST
  const removeHandler = (index) => {
    let storedArr = [...toDo];
    storedArr.splice(index, 1);
    setToDo(storedArr);
  };
  useEffect(() => {
    handleFetch();
    console.log("use effect worked");
  }, []);
  if (!randomBeer) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="main-container">
      <div className="container">
        <h1>SHOPPING LIST</h1>
        <Input
          addHandler={addHandler}
          handleClick={handleClick}
          input={input}
        />
        <div className="toDo">
          <Display toDo={toDo} removeHandler={removeHandler} />
          {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}
        </div>
      </div>
      <div className="randomBeer">
        {randomBeer.map((item, index) => {
          return (
            <Beer
              beerName={item.name}
              // tagline={item.tagline}
              // description={item.description}
            />
          );
        })}
        <button className="beerBtn" onClick={handleFetch}>
          Shuffle Beer
        </button>
      </div>
    </div>
  );
};

export default App;
