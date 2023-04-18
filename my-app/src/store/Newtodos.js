import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions/actions';
import { useMemo } from 'react';


export default function Newtodos() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = React.useState('');

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  return (
    <div>
      <form onSubmit={handleNewTaskSubmit}>
        <input type="text" value={newTask} onChange={handleNewTaskChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}