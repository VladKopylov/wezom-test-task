export const getUsers = (state) => {
  const { byName, byGender, byNationality } = state.filter;

  let users = state.users.data;

  if (byGender) {
    users = users.filter((el) => el.gender === byGender);
  }

  if (byNationality.length) {
    users = users.filter((el) => byNationality.includes(el.nationality));
  }

  if (byName) {
    users = users.filter((el) => el.fullName.toLowerCase().includes(byName));
  }

  return {
    ...state.users,
    data: users,
  };
};
