import React, { useContext, useEffect, useRef, useState } from 'react';

import { DataTodoListContext } from '../Context/DataTodoListProvider';

export function FormInput() {
    const { todos, setTodos } = useContext(DataTodoListContext);
    const [todoName, setTodoName] = useState("");
    const todoInput = useRef();

    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos, { name: todoName, complete: false }])
        setTodoName("");
        todoInput.current.focus();
    }

    useEffect(() => {
        todoInput.current.focus();
    }, [])

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input
                type="text"
                name="todos"
                id="todos"
                required
                placeholder="O que precisa ser feito?"
                ref={todoInput}
                value={todoName}
                onChange={e => setTodoName(e.target.value.toLocaleLowerCase())}
            />

            <button type="submit">Criar</button>
        </form>
    )
}
