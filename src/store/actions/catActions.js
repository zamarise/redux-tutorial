// argument list that returns a dispatch function
export const addCat = (name, alive) => dispatch => {
  dispatch({
    type: 'ADD_CAT',
    payload: {
      name,
      alive
    }
  });
};

// same as doing this in inspect redux dispatch
