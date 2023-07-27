import TodosListDone from './TodoListDone';
import TodosList from './TodosList';
import { useContext } from 'react';
import { TodosContext } from '@/contexts/TodosContext';

const TodoListAll = () => {
  const { todos } = useContext(TodosContext);

  const doneCount = todos.reduce((count, todo) => {
    if (todo.done) {
      count++;
    }

    return count;
  }, 0);

  return (
    <div className="flex flex-col gap-7 min-h-[472px]">
      <div className="flex justify-between">
        <h1 className="text-2xl">
          Task <br />
          List
        </h1>
        <p className="self-end text-sm text-primary">
          {doneCount}/{todos.length} Task finished
        </p>
      </div>
      <div className="flex flex-col gap-9 overflow-y-scroll mt-9 min-h-[312px]">
        {doneCount > 0 && <TodosListDone />}
        <div>
          <TodosList />
        </div>
      </div>
    </div>
  );
};

export default TodoListAll;
