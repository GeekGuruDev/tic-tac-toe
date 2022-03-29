const Cell = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-indigo-400 text-slate-200 text-4xl w-24 h-24 rounded ${className} hover:bg-indigo-500`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Cell;
