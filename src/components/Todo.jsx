import React, { useRef, useState, useLayoutEffect } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodoList } from "../actions";
const Todo = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);
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
      <TodoList />
    </div>
  );
};
export default Todo;
