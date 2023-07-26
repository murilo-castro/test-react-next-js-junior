import Link from 'next/link';

const TodoListItem = ({ todo }) => {
  return (
    <div className="flex gap-5 justify-between items-center min-h-[86px] p-5">
      <input type="checkbox" />
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
