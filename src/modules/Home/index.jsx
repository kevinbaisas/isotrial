
import _            from 'underscore';
import * as actions from './actions';

const defaultState = { users: [], page: 1, isFetching: false };

const ssr = (state = defaultState, action) => {

  switch(action.type) {
    case actions.FETCH_USERS_SUCCESS:
      const possiblyDuplicatingUsers = state.users.concat(action.res);
      const filterFn = item => item._id.toString();
      const joinedList = _.uniq(possiblyDuplicatingUsers, filterFn);

      return Object.assign({}, state, {
        users: joinedList,
        page: ++state.page
      });
      break;
    case actions.FETCH_USERS:
    case actions.FETCH_USERS_ATTEMPT:
      return Object.assign({}, state, { isFetching: true });
      break;
    case actions.FETCH_USERS_DONE:
      return Object.assign({}, state, { isFetching: false });
      break;
    case actions.FETCH_USERS_ERROR:
      return Object.assign({}, state, { errors: action.err });
      break;
    default:
      return state || defaultState;
  }

}

export default ssr;
