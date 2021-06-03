import React, { useRef, useState, useLayoutEffect } from 'react'
import { connect } from "react-redux";
import { addTodoList } from "../actions/index";
import TodoList from "./TodoList";

const Todo = (props) => {
    const inputRef = useRef(null);
    const [input, setInput] = useState();
    useLayoutEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div className="container">
            <h1 className="header-title">
                Todos App with Redux
            </h1>
            <div className="input-area">
                <input onChange={(e) => setInput(e.target.value)} className="input-element" value={input || ""} type="text" ref={inputRef} placeholder="Add new task"/>
                {
                    input &&
                    <button className="btn-add"
                        onClick={() => {
                            props.addTodoList(input)
                            setInput("");
                        }}
                        >
                        Add new task
                </button>
                }
            </div>
            <TodoList />
        </div>
    )
}
export default connect(null, { addTodoList })(Todo);