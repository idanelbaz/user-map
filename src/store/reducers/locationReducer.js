import types from "../types";

export default function
  postsReducer(state = { userLocation: null }, action) {
  switch (action.type) {
    case types.GET_USER_LOCATION:
      return { ...state, userLocation: action.data };
    default:
      return state;
  }
}