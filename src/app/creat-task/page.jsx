'use client';

import { useContext, useState } from 'react';
import { TodosContext } from '@/contexts/TodosContext';
import { useRouter } from 'next/navigation';
import NavigateHome from '@/components/NavigateHome';
import { TaskIcon } from '@/components/TaskIcon';

const CreatTask = () => {
  const { saveTodo } = useContext(TodosContext);
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleChangueForm = (e) => {
    e.preventDefault();
    if (input !== '') {
      saveTodo(input);
    }
    setInput('');
    router.push('/');
  };

  return (
    <div className="flex min-h-[372px] max-h-screen flex-col justify-between p-[30px] pl-[18px] max-w-7xl mx-auto">
      <NavigateHome>
        Create <br /> task
      </NavigateHome>
      <form
        onSubmit={handleChangueForm}
        className="flex flex-col items-center mt-[70px] justify-between grow min-h-[512px]"
      >
        <div className="flex flex-col justify-center min-h-[340px] bg-task-to-do w-full px-4 py-[22px] rounded">
          <h4>Task title</h4>
          <label
            htmlFor="create"
            className="mt-[10px] bg-task-to-do w-full flex px-4 py-[22px] rounded"
          >
            <TaskIcon />
            <input
              className="w-full pl-[25px] bg-transparent outline-none placeholder:font-semibold"
              type="text"
              name="title"
              id="title"
              value={input}
              placeholder="Type here"
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
        </div>
        <button className="min-h-[55px] min-w-full rounded-lg bg-task-done text-white shadow-purple mt-5 mb-10">
          Creat task
        </button>
      </form>
    </div>
  );
};

export default CreatTask;
