export const Loading = () => {
  return (
    <div className="flex flex-col gap-4 h-96 justify-center items-center  text-white">
      <h1 className="text-3xl">Loading...</h1>
      <i className="animate-spin text-8xl fa-solid fa-spinner"></i>
    </div>
  );
};