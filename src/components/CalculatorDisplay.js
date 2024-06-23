
const CalculatorDisplay = ({currExpr, exprHistory}) => {
    return (
      <div className="calculator-display">
        <input value={exprHistory} />
        <input value={currExpr} />
      </div>
    );
}

export default CalculatorDisplay;