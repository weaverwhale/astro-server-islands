export const fetchUser = async (id?: string | number) => {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  );

  if (!user) {
    return { error: 'User not found' };
  }

  return { ...user, role: id === 1 ? 'super' : 'user' };
};

export const isUserAdmin = (user: User) => {
  return user.role === 'super';
};
