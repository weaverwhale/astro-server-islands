import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  const body = await request.json();
  const id = body.id;

  if (!body.id) {
    return new Response(JSON.stringify({ error: 'Please provide a user id' }));
  }

  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  );
  if (user.id) {
    cookies.set('user', id, {
      sameSite: 'lax',
      path: '/',
      secure: false,
    });

    return new Response(JSON.stringify(user));
  }

  return new Response(JSON.stringify({ error: 'Could not find a user' }));
};

export const prerender = false;
