export const addTask = (text) => {
    return {
      type: 'ADD_TASK',
      payload: text,
    };
  };
  
  export const toggleTask = (id) => {
    return {
      type: 'TOGGLE_TASK',
      payload: id,
    };
  };
