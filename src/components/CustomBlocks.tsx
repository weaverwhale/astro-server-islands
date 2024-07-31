export default function CustomBlocks({ userCustomizations }: { userCustomizations?: any[] }) {
  return (
    <div className="user-customizations grid sm:grid-cols-2 gap-4 mt-4">
      {userCustomizations?.map((block) => (
        <div key={block.id} className="user-customization border rounded-md p-4">
          <h2 className="text-xl">{block.title}</h2>
          <p>{block.content}</p>
          {block.link && (
            <a href={block.link} className="text-blue-500 hover:underline mt-4 block">
              Go to {block.title}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
