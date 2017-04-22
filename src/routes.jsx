
import React      from 'react';
import Base       from './modules/Base/component';
import Home       from './modules/Home/container';

/**
 * NOTE: `name` is just used for my `NavItem`
 * component and SSR checking if its unique.
 * It is not an actual option
 */
const routes = [
  {
    name: 'Base',
    component: Base,
    routes: [
      {
        path: '/',
        name: 'Home',
        exact: true,
        component: Home
      }
    ]
  }
];

/** NOTE: All must be have the exact key */
export default routes;
