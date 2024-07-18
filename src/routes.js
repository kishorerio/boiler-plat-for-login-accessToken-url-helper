import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ListOfUsers = React.lazy(() => import('./views/List of users/ListOfUsers'))
const UsersProfiles = React.lazy(() => import('./views/User Profiles/UserProfiles'))
const AccountsDetails = React.lazy(() => import('./views/Accounts Details/AccountDetails'))
const JobCategories = React.lazy(() => import('./views/Job Categories/JobCategories'))
const CallHistory = React.lazy(() => import('./views/Call History/CallHistory'))
const Invoices = React.lazy(() => import('./views/Invoices/Invoices'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/list-of-users', name: 'List of Users', element: ListOfUsers },
  { path: '/user-profiles', name: 'User Profiles', element: UsersProfiles },
  { path: '/accounts-details', name: 'Accounts Details', element: AccountsDetails },
  { path: '/job-categories', name: 'Job Categories', element: JobCategories },
  { path: '/call-history', name: 'Call History', element: CallHistory },
  { path: '/invoices', name: 'Invoices', element: Invoices },
]

export default routes
