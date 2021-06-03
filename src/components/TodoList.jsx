import React from 'react'
import { connect } from 'react-redux';
import { completedToItemFromToDoList, removeTodoList } from "../actions/index";

const TodoList = (props) => {
    const { list } = props;
    return (
        list && list.length > 0 && list.map((item,index) => {
            return (
                <div className="list-container" key={index}>
                    <div className={item.completed ? "not-active" : "active"}
                        onClick={() => props.completedToItemFromToDoList(item.id)}
                    >
                        {item.text}
                    </div>
                    <i onClick={() => props.removeTodoList(item.id)} 
                    className="fas fa-window-close icon remove-container">
                        <p className="tooltip">
                            Remove task
                        </p>
                    </i>
                </div>
            )
        })
    )
}
const mapStateToProps = (state) => {
    return {
        list: state.todoList
    }
}
export default connect(mapStateToProps, { completedToItemFromToDoList, removeTodoList })(TodoList);
