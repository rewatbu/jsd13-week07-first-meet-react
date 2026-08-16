const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
        <img
          className="avatar w-32 h-32 object-cover rounded-full"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        <h1 className="text-xl font-bold text-center  ">{user.name}</h1>
      </div>
    </>
  );
}
