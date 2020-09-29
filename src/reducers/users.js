const initialState = {
  data: [],
  isLoading: false,
};

export const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_USERS":
      return {
        ...state,
        data: payload,
      };

    case "LOADING_USERS":
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
