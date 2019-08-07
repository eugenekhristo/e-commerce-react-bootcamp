import UserActionTypes from './user.types';

const DEFAULT_STATE = { currentUser: null };

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};
