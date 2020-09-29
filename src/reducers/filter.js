const initialState = {
  byName: "",
  byGender: null,
  byNationality: [],
};

export const filter = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_GENDER_FILTER":
      return {
        ...state,
        byGender: payload,
      };
    case "SET_NATIONALITY_FILTER":
      return {
        ...state,
        byNationality: payload,
      };
    case "SET_NAME_FILTER":
      console.log('payload:', payload);
      return {
        ...state,
        byName: payload.trim(),
      };
    case "SET_CLEAR_FILTER":
      return initialState;
    default:
      return state;
  }
};
