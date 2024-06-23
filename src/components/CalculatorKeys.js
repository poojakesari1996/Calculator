import Key from "./Key";

const keys = [
  { id: "clear", type: "function", value: "C" },
  { id: "clearBack", type: "function", value: "CE" },
  { id: "multiply", type: "operator", value: "*" },
  { id: "9", type: "number", value: "9" },
  { id: "8", type: "number", value: "8" },
  { id: "7", type: "number", value: "7" },
  { id: "minus", type: "operator", value: "-" },
  { id: "6", type: "number", value: "6" },
  { id: "5", type: "number", value: "5" },
  { id: "4", type: "number", value: "4" },
  { id: "add", type: "operator", value: "+" },
  { id: "3", type: "number", value: "3" },
  { id: "2", type: "number", value: "2" },
  { id: "1", type: "number", value: "1" },
  { id: "divide", type: "operator", value: "/" },
  { id: "dot", type: "number", value: "." },
  { id: "0", type: "number", value: "0" },
  { id: "%", type: "number", value: "%" },
  { id: "calc", type: "function", value: "=" },
];

const CalculatorKeys = (props) => {

    return (
      <div className="calculator-keys-wrapper">
        {keys.map((keyOb) => (
          <Key
            keyClickHandler={props.keyClickHandler}
            keyOb={keyOb}
            key={keyOb.id}
          />
        ))}
      </div>
    );
}

export default CalculatorKeys;