export const fetchUser = async (id?: string | number) => {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  );

  if (!user) {
    return { error: 'User not found' };
  }

  return { ...user, role: id === '1' ? 'super' : 'user' };
};

export const isUserAdmin = (user: User) => {
  return user.role === 'super';
};

export const fetchUserCustomizations = async (id: string | number) => {
  const user = await fetchUser(id);

  const userBlocks = [
    {
      id: '1',
      title: 'Welcome!',
      content:
        'Welcome to the site! This data is fetched SSR, and rendered on the client SPA. We could render this server side, but are choosing not to for demonstration purposes.',
      permissions: ['user'],
    },
    {
      id: '2',
      title: 'Admin',
      content: 'You are seeing this block because you are a "super" user. Wow!',
      permissions: ['super'],
      link: '/admin',
    },
    {
      id: '3',
      title: 'Posts',
      content: 'You can view your posts here.',
      permissions: ['user'],
      link: '/posts',
    },
    {
      id: '3',
      title: 'Account',
      content: 'You can view your account here.',
      permissions: ['user'],
      link: '/account',
    },
  ];

  return userBlocks.filter((block) => block.permissions.includes(user.role));
};
