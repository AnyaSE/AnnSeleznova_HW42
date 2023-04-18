import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer';

const initialState = {
  tasks: [
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Do laundry', completed: false },
    { id: 3, text: 'Clean the house', completed: true },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTaskObject = {
        id: state.tasks.length + 1,
        text: action.payload,
        completed: false,
      };
      return { ...state, tasks: [...state.tasks, newTaskObject] };

    case 'TOGGLE_TASK':
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
      return { ...state, tasks: updatedTasks };

    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;