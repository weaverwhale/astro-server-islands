export default function UsersList({ users }: { users: User[] }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map((user) => (
        <div key={user.id} className="post border rounded-lg p-4 mt-4">
          <h2 className="text-3xl font-semibold">User #{user.id}</h2>
          <h3 className="text-2xl">{user.name}</h3>
          <h3 className="text-xl">{user.username}</h3>
          <p>{user.website}</p>
        </div>
      ))}
    </div>
  );
}
