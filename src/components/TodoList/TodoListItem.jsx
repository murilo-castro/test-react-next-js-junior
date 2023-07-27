import Link from 'next/link';
import { useContext } from 'react';
import { TodosContext } from '@/contexts/TodosContext';
import Checkbox from '@mui/material/Checkbox';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const TodoListItem = ({ todo }) => {
  const { updateDone } = useContext(TodosContext);

  return (
    <div className="flex gap-5 justify-between items-center min-h-[75px] px-4">
      <Checkbox
        className="accent-place"
        defaultChecked={todo.done}
        onClick={(e) => updateDone(todo.id, todo.done)}
        sx={{
          '&.Mui-checked': {
            color: 'white',
          },
          color: `${todo.done ? 'white' : '#bfbfbf'}`,
        }}
      />
      <p className={`${todo.done ? 'text-white' : 'text-black'}`}>
        {todo.title}
      </p>
      <Link href={`/update-task/${todo.id}`}>
        <button className={`${todo.done ? 'text-white' : 'text-black'}`}>
          <NavigateNextIcon />
        </button>
      </Link>
    </div>
  );
};

export default TodoListItem;
