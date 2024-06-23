import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeys from "./CalculatorKeys";
import {useState} from "react";

import { create, all } from "mathjs";

const config = {};
const math = create(all, config);


let symbols = ["*", "-", "+", "/"];

const Calculator = () => {

    const [exprHistory, setExprHistory] = useState("");
    const [currExpr, setCurrExpr] = useState("");


    const keyClickHandler = ({id,type,value}) => {

        let lastInput = currExpr.slice(-1);

        switch (type) {
          case "function":
            functionKey(id, lastInput);
            break;
          case "operator":
            operatorKey(value, lastInput);
            break;
          case "number":
            numberKey(value, lastInput);
            break;
          default:
            return;
        }
    }

    const functionKey = (id, lastInput) => {

      let temp = currExpr;

      const reset = () => {
        // reseting values
        setCurrExpr("");
        setExprHistory("");
      };

      const calculate = (lastInput) => {

        //preventing calculation incase lastInput is operator or currExpr is empty
        if(symbols.includes(lastInput) || currExpr === "") return;

    
        setExprHistory(currExpr);

        temp = math.evaluate(temp);
        temp = Number.isInteger(temp) ? temp : temp.toFixed(3);
        temp = temp.toString();
        
        setCurrExpr(temp);
      };

      switch (id) {
        case "clear":
          reset();
          break;
        case "clearBack":
          temp = temp.slice(0, -1);
          setCurrExpr(temp);
          break;
        case "calc":
          calculate(lastInput);
          break;
        default:
          return;
      }
    };

    const operatorKey = (value, lastInput) => {

      let temp = currExpr;

      // return in case of starting with operator other than "-"
      if (temp === "" && value !== "-") {
        return;
      } 

      // replacing operator symbol if lastInput is operator only else simply adding in output
      symbols.includes(lastInput)? (temp = temp.slice(0, -1) + value) : (temp += value);

      setCurrExpr(temp);
    };

    const numberKey = (value, lastInput) => {
      
      let temp = currExpr;
      // prevent entering . or % multiple times consec
      if (value === "." || value === "%") {

        // preventing starting with %'
        if (currExpr === "" && value === "%") return;

        //preventing case in which currvalue is . and lastInput is . or % 
        //and currVal is % and lastInput is % or .
        lastInput === "." || lastInput === "%" || (temp += value);

      } else {
        temp += value;
      }
      
      setCurrExpr(temp);
    };

    return (
        <div className="calculator-wrapper">
            <CalculatorDisplay currExpr={currExpr} exprHistory={exprHistory}/>
            <CalculatorKeys keyClickHandler={keyClickHandler}/>
        </div>
    )
}

export default Calculator;