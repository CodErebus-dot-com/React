import React from 'react'
import Todo from './Todo'

const TodoInterface = ({todos, inputText, setInputText, filteredTodos, setTodos, setUpdateInputText, setToUpdate, updateInputText, toUpdate}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map(todo => 
                    <Todo 
                        todo={todo} 
                        todos={todos}
                        inputText={inputText}
                        setInputText={setInputText} 
                        key={todo.id} 
                        setTodos={setTodos} 
                        setToUpdate={setToUpdate}
                        setUpdateInputText={setUpdateInputText}
                        updateInputText={updateInputText}
                        toUpdate={toUpdate}
                    />)       
                }
            </ul>
        </div>
    )
}

export default TodoInterface






















// import React from 'react'
// import Todo from './Todo'

// const TodoList = ({todos, setTodos, filteredTodos}) => {
//     return(
//         <div className="todo-container">
//             <ul className="todo-list">
//                 {
//                     filteredTodos.map(todo => <Todo 
//                                             key={todo.id} 
//                                             todo={todo} 
//                                             todos={todos} 
//                                             setTodos={setTodos}
//                                         />)
//                 }
//             </ul>
//         </div>
//     )
// }

// export default TodoList