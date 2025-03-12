export const AuthReducers = (state, action) => {
  switch (action.type) {
    case "REGISTER_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "REGISTER_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "REGISTER_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };

    default:
      state;
  }
};
