import { connect } from "react-redux";

import { fetchUsers } from "../actions/users";
import {
  setClearFilter,
  setGenderFilter,
  setNameFilter,
  setNationalityFilter,
} from "../actions/filter";
import { getUsers } from "../selectors/getUsers";
import { Main } from "./Main";

const mapStateToProps = (state) => ({
  users: getUsers(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
  setGenderFilter: (filterValue) => {
    dispatch(setGenderFilter(filterValue));
  },
  setNationalityFilter: (filterValue) => {
    dispatch(setNationalityFilter(filterValue));
  },
  setNameFilter: (filterValue) => {
    dispatch(setNameFilter(filterValue));
  },
  setClearFilter: () => {
    dispatch(setClearFilter());
  },
});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
