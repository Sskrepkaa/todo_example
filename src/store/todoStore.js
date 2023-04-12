import {supabase} from "../lib/supabaseClient";
import { writable } from 'svelte/store';

export const todos = writable([]);

export const loadTodos = async (todoStr) => {
    const {data, error} = await supabase.from('todos').select('*');

        console.log("loadtotos", data)

    if(error){return alert(error)}

        console.log("todos", todos)

      todoStr.update(arr => [...arr, data]);

        console.log("todoStr", todoStr)
}

export const addTodo = async (text, user_id = "text") => {
    const {data, error} = await supabase.from('todo').insert([text, user_id]);
    if(error){return alert(error)}
    todos.update((cur) => [...cur, data[0]]);
}