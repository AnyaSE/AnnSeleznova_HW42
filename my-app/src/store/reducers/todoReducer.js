import { ADD_TASK, TOGGLE_TASK } from '../actions/actions';
import { useMemo } from 'react';

const initialState = {
    tasks: [
      { id: 1, text: 'Buy groceries', completed: false },
      { id: 2, text: 'Do laundry', completed: false },
      { id: 3, text: 'Clean the house', completed: true },
    ],
  };

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [
            ...state.tasks,
            {
              id: state.tasks.length + 1,
              text: action.payload.text,
              completed: false,
            },
          ],
        };
      case 'TOGGLE_TASK':
        const updatedTasks = state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        );
        return { ...state, tasks: updatedTasks };
      default:
        return state;
    }
  };
  
  export default todoReducer;