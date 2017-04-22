
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import AppHelmet            from '../AppHelmet/component';
import UserTableRow         from '../UserTableRow/component';
import { fetchUserByThunk } from './actions';

export default class Home extends Component {

  getMeta() {
    return [
      {
        'name': 'description',
        'content': 'Sample description here!'
      }
    ];
  };

  getLink() {
    return [
      {
        'rel': 'canonical',
        'href': 'http://www.your-website.xyz/home'
      }
    ];
  };

  getScript() {
    return [
      {
        'type': 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org'
        }`
      }
    ];
  };

  /** Will only be dispatched on SSR. Must be static */
  static required = [
    { action: fetchUserByThunk, params: [1, 5] }
  ];

  constructor(props) {
    super(props);

    this.fetchUsers = this.fetchUsers.bind(this);
    this.cancelFetchUsers = this.cancelFetchUsers.bind(this);
  }

  componentWillMount() {
    const { setActiveModule } = this.props;
    setActiveModule();
  }

  fetchUsers() {
    const { fetch, page } = this.props;
    fetch(page, 5);
  }

  cancelFetchUsers() {
    const { cancel } = this.props;
    cancel();
  }

  render() {
    const { isFetching, users } = this.props;
    const buttonText = isFetching ? 'Cancel!' : 'Fetch!';
    const buttonAction = isFetching? this.cancelFetchUsers : this.fetchUsers;
    const userList = users.map(user => (<UserTableRow key={ user._id } user={ user } />));

    return (
      <div class='centered-text mdl-grid'>
        <AppHelmet title='Users' meta={ this.getMeta() } link={ this.getLink() } script={ this.getScript() } />
        <h6>Redux Isomorphic Boilerplate</h6>
        <button onClick={ buttonAction } class='mdl-cell mdl-cell--12-col centered-button mdl-button mdl-js-button mdl-button--raised'>
          { buttonText }
        </button>
        <table class='mdl-cell mdl-cell--12-col mdl-data-table mdl-shadow--2dp user-list-table'>
          <thead>
            <tr>
              <th class='mdl-data-table__cell--non-numeric'>ID</th>
              <th class='mdl-data-table__cell--non-numeric'>Name</th>
              <th class='mdl-data-table__cell--non-numeric'>Email</th>
              <th class='mdl-data-table__cell--non-numeric'>Date Registered</th>
            </tr>
          </thead>
        <tbody>
          { userList }
        </tbody>
      </table>
      </div>
    );
  }
}

Home.propTypes = {
  setActiveModule:  PropTypes.func.isRequired,
  isFetching:       PropTypes.bool.isRequired,
  users:            PropTypes.array.isRequired,
  page:             PropTypes.number.isRequired,
  fetch:            PropTypes.func.isRequired,
  cancel:           PropTypes.func.isRequired
}
