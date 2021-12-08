import React from "react";

import { Footer } from "./Footer";
import { FormInput } from "./FormInput";
import { List } from "./List";

export function TodoList() {
    return (
        <>
            <h1>Todo List</h1>

            <FormInput />
            <List />
            <Footer />
        </>
    )
}