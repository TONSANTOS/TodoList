import React, { useContext, useState } from 'react'

import { DataTodoListContext } from "../Context/DataTodoListProvider";

export function Footer() {
    const [checkAll, setCheckAll] = useState(false)
    const { todos, setTodos } = useContext(DataTodoListContext)

    const handleCheckAll = () => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    const newTodosComplete = () => {
        return todos.filter(todo => todo.complete === false)
    }

    const handleDelete = () => {
        setTodos(newTodosComplete())
        setCheckAll(false)
    }

    return (
        <>
            {todos.length === 0 ? <h2>Parabéns! Nothings Todo</h2>
                : <div className="row">
                    <label htmlFor="all">
                        <input type="checkbox" name="all" id="all" onChange={handleCheckAll} />
                        TUDO
                    </label>
                    <p>Você tem {newTodosComplete().length} para fazer</p>
                    <button id="delete" onClick={handleDelete}>Deletar</button>
                </div>}
        </>
    )
}
