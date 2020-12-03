import React from 'react';

const AddGob = React.lazy(() => import('./views/gov/forms/AddGob'));
const GovjobList = React.lazy(() => import('./views/gov/list-jobs/JobList'));
const AddNonGob = React.lazy(() => import('./views/nongov/forms/AddNonGob'));
const NonGovjobList = React.lazy(() => import('./views/nongov/list-jobs/JobList'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/gov/forms', name: 'Add Government Job', component: AddGob },
  { path: '/gov/list-jobs', name: 'Government Jobs List', component: GovjobList },
  { path: '/nongov/forms', name: 'Add Non-Government Job', component: AddNonGob },
  { path: '/nongov/list-jobs', name: 'Non-Government Jobs List', component: NonGovjobList },

];

export default routes;
