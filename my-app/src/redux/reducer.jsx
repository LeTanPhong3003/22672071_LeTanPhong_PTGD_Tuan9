const initialState = { value: 0 };

// Pure function reducer
export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, value: state.value + action.payload };
    case "SUBTRACT":
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};