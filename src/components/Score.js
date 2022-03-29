const Score = ({ type, children }) => {
  return (
    <div className="bg-indigo-200 text-indigo-500 text-2xl text-center p-2 rounded w-20 h-20">
      <h1>{type}</h1>
      <p>{children}</p>
    </div>
  );
};

export default Score;
