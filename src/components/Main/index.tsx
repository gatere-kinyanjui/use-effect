import { useEffect, useState } from "react";

const Main = () => {
  const [toggleOne, setToggleOne] = useState<boolean>(false);
  const [toggleTwo, setToggleTwo] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect1 ran.");
  }, []);

  useEffect(() => {
    console.log("useEffect2 ran");
    if (toggleTwo)
      console.log("toggleTwo slice of state is true so this code runs");
  }, [toggleTwo]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`useEffect3 with interval number ${count} is running`);
    }, 1000);

    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
  }, [count]);

  return (
    <div className="main-component">
      {console.log("rendered or rerendered")}
      <h2>Main Component</h2>

      <button onClick={() => setToggleOne(!toggleOne)}>Toggle One</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>Toggle Two</button>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
};

export default Main;
