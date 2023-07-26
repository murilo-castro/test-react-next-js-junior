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
    todos.map((todo) => {
      if (todo.id === id) {
        todos.splice(todo.id - 1, 1);
        setTodos([...todos, { ...todo, title }]);
      }
    });
    console.log(todos);
  };

  return (
    <TodosContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);
