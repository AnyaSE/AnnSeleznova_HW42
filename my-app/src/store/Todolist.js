import { useDispatch, useSelector } from 'react-redux';
import Newtodos from './Newtodos';

export default function TodoList() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleTaskClick = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: { id } });
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => handleTaskClick(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
      <Newtodos />
    </div>
  );
}