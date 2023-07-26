'use client';

import { useContext, useState } from 'react';
import { TodosContext } from '@/contexts/TodosContext';

const CreatTask = () => {
  const { saveTodo } = useContext(TodosContext);
  const [input, setInput] = useState('');

  const handleChangueForm = (e) => {
    e.preventDefault();
    if (input !== '') {
      saveTodo(input);
    }
    setInput('');
  };

  return (
    <div className="p-[2rem] max-w-7xl mx-auto">
      <form onSubmit={handleChangueForm}>
        <input
          className=" placeholder-gray-500 focus:border-blue-500"
          type="text"
          name="title"
          id="title"
          value={input}
          placeholder="Type here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="min-h-[76px] min-w-full rounded-lg bg-task-done text-white shadow-purple mt-5">
          Creat Task
        </button>
      </form>
    </div>
  );
};

export default CreatTask;
