export default function PostsList({ posts }: { posts: Post[] }) {
  return (
    <div className="posts grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="post border rounded-lg p-4">
          <h2 className="text-3xl font-semibold">Post {post.id}</h2>
          <h3 className="text-2xl">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
