'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export const TodosContext = createContext({});

export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      setTodos(JSON.parse(tasks));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(todos));
    }
  }, [todos]);

  const saveTodo = (title) => {
    const id = Number(localStorage.getItem('newId'));
    let newId;
    if (id) {
      newId = id + 1;
    } else {
      newId = 1;
    }
    const newTodo = {
      id: newId,
      title: title,
      done: false,
    };

    setTodos([...todos, newTodo]);
    localStorage.setItem('newId', JSON.stringify(newId));
  };

  const updateTodo = (id, title) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    window.localStorage.removeItem('tasks');
    const newTodos = todos.filter((todo) => todo.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const updateDone = (id, done) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        const isDone = !done;
        console.log(isDone);
        return { ...todo, done: !done };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <TodosContext.Provider
      value={{ todos, saveTodo, updateTodo, updateDone, deleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);
