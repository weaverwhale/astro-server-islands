export const NAV = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Posts',
    link: '/posts',
  },
];

export const LOGIN = {
  name: 'Login',
  link: '/login',
};

export const LOGOUT = {
  name: 'Logout',
  link: '/logout',
};

export const SUPER_USER_NAV = [
  {
    name: 'Admin',
    link: '/admin',
  },
];

export const computeNav = (user: User) => {
  return user && user.role === 'super'
    ? [...NAV, ...SUPER_USER_NAV, LOGOUT]
    : user
    ? [...NAV, LOGOUT]
    : [LOGIN];
};
