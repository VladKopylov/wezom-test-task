export const setGenderFilter = (payload) => ({
  type: "SET_GENDER_FILTER",
  payload,
});

export const setNationalityFilter = (payload) => ({
  type: "SET_NATIONALITY_FILTER",
  payload,
});

export const setNameFilter = (payload) => ({
  type: "SET_NAME_FILTER",
  payload,
});

export const setClearFilter = () => ({
  type: "SET_CLEAR_FILTER",
});
