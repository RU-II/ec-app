import { createSelector } from "reselect"

// store全体のstate
const usersSelector = (state) => state.users;

export const getUserId = createSelector(
  [usersSelector],
  // state=state.usersにここではなっている
  state => state.uid
)

export const getUsername = createSelector(
  [usersSelector],
  state => state.username
)
