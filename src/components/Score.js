const Score = ({ type, children }) => {
  return (
    <div className="bg-indigo-200 text-indigo-500 text-xl text-center p-1 rounded w-16">
      <h1>{type}</h1>
      <p>{children}</p>
    </div>
  );
};

export default Score;
