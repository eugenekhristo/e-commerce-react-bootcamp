import { SET_CURRENT_USER } from './user.actions';

const DEFAULT_STATE = { currentUser: null };

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};
