import React, { useState } from 'react'

export function ListItem({ todo, id, checkComplete, handleEditTodos }) {
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)

    const handleEditTodo = () => {
        setOnEdit(true)
    }

    const handleSave = id => {
        setOnEdit(false)
        if(editValue) {
            handleEditTodos(editValue, id)
        } else {
            setEditValue(todo.name)
        }
    }

    if (onEdit) {
        return (
            <li>
                <input
                    type="text"
                    id="editValue"
                    value={editValue}
                    name="editValue"
                    onChange={e => setEditValue(e.target.value.toLocaleLowerCase())}
                />
                <button onClick={() => handleSave(id)}>Salvar</button>
            </li>
        )
    } else {
        return (
            <li>
                <label htmlFor={id} className={todo.complete ? "active" : ""}>
                    <input type="checkbox" id={id} checked={todo.complete} onChange={() => checkComplete(id)} />
                    {todo.name}
                </label>
                <button disabled={todo.complete} onClick={handleEditTodo}>Editar</button>
            </li>
        )
    }
}
