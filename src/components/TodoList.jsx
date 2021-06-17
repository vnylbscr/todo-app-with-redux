import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completedToItemFromToDoList, removeTodoList } from "../actions/index";
const TodoList = () => {
  const list = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  console.log(dispatch);
  return (
    list &&
    list.length > 0 &&
    list.map((item, index) => {
      return (
        <div className="list-container" key={index}>
          <div
            className={item.completed ? "not-active" : "active"}
            onClick={() => dispatch(completedToItemFromToDoList(item.id))}
          >
            {item.text}
          </div>
          <i
            onClick={() => dispatch(removeTodoList(item.id))}
            className="fas fa-window-close icon remove-container"
          >
            <p className="tooltip">Remove task</p>
          </i>
        </div>
      );
    })
  );
};

export default TodoList;
