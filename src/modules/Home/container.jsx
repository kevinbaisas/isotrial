
import { connect }          from 'react-redux';
import { setActiveModule }  from '../../actions';
import { HOME }             from '../../constants';
import Home                 from './component';
import * as actions         from './actions';

const mapDispatchToProps = dispatch => ({
  setActiveModule: () => dispatch(
    setActiveModule(HOME)
  ),
  fetch: (page, limit) => dispatch(
    actions.fetchUsers(page, limit)
  ),
  cancel: () => dispatch(
    actions.fetchUsersCancel()
  )
})

const mapStateToProps = (state, props) => {
  const { isFetching, users, page } = state.ssr;

  return { isFetching, users, page };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
