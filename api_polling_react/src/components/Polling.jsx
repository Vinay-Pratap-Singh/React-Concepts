import React, { useEffect, useRef, useState } from "react";

const Polling = () => {
  const [currentTodo, setCurrentTodo] = useState();
  const currentTodoIndex = useRef(1);
  useEffect(() => {
    //   function to get todo data
    function getTodoData() {
      try {
        fetch(
          `https://jsonplaceholder.typicode.com/todos/${currentTodoIndex.current}`
        )
          .then((response) => response.json())
          .then((json) => setCurrentTodo(json));
        currentTodoIndex.current += 1;
      } catch (error) {
        console.log("Failed to fecth todo data : ", error);
      }
    }

    // starting the polling
    const intervalID = setInterval(getTodoData, 2000);
    return () => {
      // stopping the interval
      clearInterval(intervalID);
    };
  }, []);
  return (
    <div>
      <h1>API Polling ON</h1>
      <div>
        <h2>Todo ID : {currentTodo?.id}</h2>
        <h2>Todo Title : {currentTodo?.title}</h2>
      </div>
    </div>
  );
};

export default Polling;
