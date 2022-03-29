import Cell from "./Cell";

const Board = ({ values, setValues }) => {
  return (
    <div className="grid grid-cols-3 gap-2 max-w-max mx-auto">
      {values.map((value, index) => {
        return (
          <Cell
            key={index}
            onClick={() => {
              setValues(index);
            }}
            className=""
          >
            {value}
          </Cell>
        );
      })}
    </div>
  );
};

export default Board;
