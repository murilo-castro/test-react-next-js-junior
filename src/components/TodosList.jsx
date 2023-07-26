import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';
import TodoListItem from './TodoListItem';

const TodosList = () => {
  const { todos } = useContext(TodosContext);

  todos.sort((a, b) => a.id - b.id);

  console.log(todos);

  const data = todos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo}></TodoListItem>
  ));

  return <ul>{data}</ul>;
};

export default TodosList;
