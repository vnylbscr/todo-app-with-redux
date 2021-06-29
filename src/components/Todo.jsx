import React, { useRef, useState, useLayoutEffect } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodoList } from "../actions";
import Merhaba from "./Merhaba";
import useSize from "../helper/useSize";
const Todo = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState();

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    inputRef.current.focus();
    
  }, []);
  const { width, height } = useSize();
  const [state, setState] = useState("");

  console.log(state);
  return (
    <div className="container">
      <h1 className="header-title">+ Todos App with Redux</h1>
      <div className="input-area">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="input-element"
          value={input || ""}
          type="text"
          ref={inputRef}
          placeholder="Add new task"
          name="input"
          
          name="input"
        />
        {input && (
          <button
            className="btn-add"
            onClick={() => {
              dispatch(addTodoList(input));
              setInput("");
            }}
          >
            Add new task
          </button>
        )}
      </div>
      <button
        onClick={() => {
          setTimeout(() => {
            setState("falan filan");
          }, 5000);
        }}
      >
        çalıştır
      </button>
      {state && <p>{state}</p>}
      <span>
        W:{width}
        H:{height}
      </span>
      <Merhaba name="Ömer" value="mert"></Merhaba>
      <TodoList />
    </div>
  );
};
export default Todo;
