import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const users = await fetch(`https://jsonplaceholder.typicode.com/users/`).then((res) =>
    res.json()
  );

  if (users.length > 0) {
    return new Response(JSON.stringify(users));
  }

  return new Response(JSON.stringify({ error: 'Could not find any users' }));
};

export const prerender = false;
