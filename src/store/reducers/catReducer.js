const initialState = {
  all: [],
  selected: {}
};

// first arg state second action
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_CAT':
      const all = [...state.all];

      //dispatch action with type of ADD CAT executes block
      all.push(payload);
      return { ...state, all };
    default:
      return state;
  }
};
