import React, { useState, useEffect, createContext } from 'react'

export const DataTodoListContext = createContext();

export const DataTodoListProvider = (props) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem("todoStore"))
        if(todoStore) setTodos(todoStore)
    }, [])

    useEffect(() => {
        localStorage.setItem("todoStore", JSON.stringify(todos))
    }, [todos])

    return (
        <DataTodoListContext.Provider value={{todos, setTodos}}>
            {props.children}
        </DataTodoListContext.Provider>
    )
}
