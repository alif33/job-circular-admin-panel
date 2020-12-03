export default [
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: 'cil-speedometer',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   }
  // },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Govment',
    route: '/gov',
    icon: 'cil-calculator',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Job List',
        to: '/gov/list-jobs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Job',
        to: '/gov/forms',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Non Govment',
    route: '/nongov',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Job List',
        to: '/nongov/list-jobs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Job',
        to: '/nongov/forms',
      }
    ],
  },
 
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

