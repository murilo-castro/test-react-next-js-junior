import { TodosContext } from '@/contexts/TodosContext';
import Link from 'next/link';
import { useContext } from 'react';

const TodoListItem = ({ todo }) => {
  const { updateDone } = useContext(TodosContext);

  return (
    <div className="flex gap-5 justify-between items-center min-h-[86px] p-5">
      <input
        type="checkbox"
        className="flex gap-5 justify-between items-center min-h-[86px] p-5 accent-place"
        defaultChecked={todo.done}
        onClick={(e) => updateDone(todo.id, todo.done, e.target.defaultChecked)}
      />
      <li>{todo.title}</li>
      <Link href={`/update-task/${todo.id}`}>
        <button className={`${todo.done ? 'text-white' : 'text-black'}`}>
          Edit
        </button>
      </Link>
    </div>
  );
};

export default TodoListItem;
