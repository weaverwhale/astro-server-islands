export const fetchPosts = async (id?: string | number) => {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then((res) =>
    res.json()
  );

  if (!posts) {
    return { error: 'Posts not found' };
  }

  return posts;
};
