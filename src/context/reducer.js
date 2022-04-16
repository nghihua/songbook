import * as types from './constants';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_TITLE: {
      return {
        ...state,
        song: {
          ...state.user,
          title: payload,
        },
      };
    }
    case types.SET_ARTIST: {
      return {
        ...state,
        song: {
          ...state.user,
          artist: payload,
        },
      };
    }
    case types.SET_LINK: {
      return {
        ...state,
        song: {
          ...state.user,
          link: payload,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;