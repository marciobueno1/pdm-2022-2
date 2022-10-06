import { ADD, INCREMENT, DECREMENT, RESET } from "../actions";

const INITIAL_STATE = {
  count: 0,
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + action.payload };
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
