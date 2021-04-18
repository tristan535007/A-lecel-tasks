const PROMISE = "PROMISE";
const PENDING = "PENDING";
export function promiseReducer(state = {}, action) {
  if (action.type === PROMISE) {
    const { name = "default", status, payload, error } = action;
    if (status) {
      return {
        ...state,
        [name]: {
          status,
          payload:
            (status === PENDING && state[name] && state[name].payload) ||
            payload,
          error,
        },
      };
    }
  }
  return state;
}

