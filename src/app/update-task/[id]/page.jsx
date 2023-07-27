'use client';

import { useContext, useState } from 'react';
import { TodosContext } from '@/contexts/TodosContext';
import { useRouter } from 'next/navigation';
import NavigateHome from '@/components/NavigateHome';
import { TrashIcon } from '@/components/TrashIcon';
import { TaskIcon } from '@/components/TaskIcon';

const UpdateTask = ({ params }) => {
  const { updateTodo, deleteTodo } = useContext(TodosContext);
  const [input, setInput] = useState('');
  const { id } = params;
  const router = useRouter();

  const handleChangueForm = (e) => {
    e.preventDefault();
    if (input !== '') {
      updateTodo(Number(id), input);
    }
    setInput('');
    router.push('/');
  };

  return (
    <div className="p-[30px] pl-[18px] max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <NavigateHome>
          Edit <br /> task
        </NavigateHome>
        <button
          type="button"
          onClick={() => {
            deleteTodo(Number(id));
            router.push('/');
          }}
        >
          <TrashIcon />
        </button>
      </div>
      <form
        onSubmit={handleChangueForm}
        className="flex flex-col items-center justify-between grow min-h-[512px]"
      >
        <div className="flex flex-col justify-center min-h-[340px] mt-[10px] bg-task-to-do w-full px-4 py-[22px] rounded">
          <h4>Task title</h4>
          <label
            htmlFor="edit"
            className="mt-[10px] bg-task-to-do w-full flex px-4 py-[22px] rounded"
          >
            <TaskIcon />
            <input
              className="w-full pl-[25px] bg-transparent outline-none placeholder:font-semibold"
              type="text"
              name="title"
              id="title"
              value={input}
              placeholder="Daily Workout"
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
        </div>
        <button className="min-h-[76px] min-w-full rounded-lg bg-task-done text-white shadow-purple mt-5">
          Uptade Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
