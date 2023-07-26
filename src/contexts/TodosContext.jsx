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
    if (todos.length > 0) localStorage.setItem('tasks', JSON.stringify(todos));
  }, [todos]);

  const saveTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      done: false,
    };

    setTodos([...todos, newTodo]);
    localStorage.setItem('tasks', JSON.stringify(todos));
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
    <TodosContext.Provider value={{ todos, saveTodo, updateTodo, updateDone }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);
