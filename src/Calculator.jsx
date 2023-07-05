import BeautifulScreen from "./BeautifulScreen.jsx";
import NumberButton from "./NumberButton.jsx";
import OperatorButton from "./OperatorButton.jsx";
import EqualButton from "./EqualButton.jsx";
import {useState} from "react";
import ItSOverNineThousand from "./ItSOverNineThousand.jsx";
import FunctionButton from "./FunctionButton.jsx";

// TODO: make this a smart component

export default function Calculator() {
    const listNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listOperator = ["+", "-", "*", "/"];
    // faire un tableau avec 3 éléments
    // const [firstNumber, setFirstNumber] = useState("");
    // const [operator, setOperator] = useState("");
    // const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");
    const [data, setData] = useState('');
    const [calc, setCalc] = useState('');

    const childToParent = (childValue) => {
        setData(childValue);
        if (listNumber.includes(childValue) || listOperator.includes(childValue)) {
            addNumber(childValue);
        } else if (childValue === "C") {
            erase();
        } else if (childValue === "Del") {
            deleteNumber();
        } else if (childValue === "save") {
            save();
        }
    }

    const equal = (buttonEqual) => {
        setCalc(buttonEqual);
        calculate(operation);
    }

    function calculate(operation) {
        // récupérer les nombres et les opérateurs
        let numbers = operation.split(/[^0-9]/);
        // récupérer les opérateurs et pas les espaces
        let operators = operation.split(/[0-9]/);
        operators = operators.filter(operator => operator !== "");
        let result;

        // parcourir les opérateurs, dès qu'on trouve une multiplication ou une division, on la fait
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === "*" || operators[i] === "/") {
                if (operators[i] === "*") {
                    result = numbers[i] * numbers[i + 1];
                } else {
                    result = numbers[i] / numbers[i + 1];
                }
                numbers.splice(i, 2, result);
                operators.splice(i, 1);
                i--;
            }
        }

        // parcourir les opérateurs, dès qu'on trouve une addition ou une soustraction, on la fait
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === "+" || operators[i] === "-") {
                if (operators[i] === "+") {
                    result = parseInt(numbers[i]) + parseInt(numbers[i + 1]);
                } else {
                    result = parseInt(numbers[i]) - parseInt(numbers[i + 1]);
                }
                numbers.splice(i, 2, result);
                operators.splice(i, 1);
                i--;
            }
        }

        // afficher le résultat en string
        let resultString = result.toString();
        setResult(resultString);
    }


    function addNumber(number) {
        let concat = operation.concat(number.toString());
        setOperation(concat);
    }

    function deleteNumber() {
        let newOperation = operation.slice(0, -1);
        setOperation(newOperation);
    }

    function erase() {
        setOperation("");
        setResult("");
    }

    function save() {
        console.log("save");
    }


    return (
        <div className={"all"}>
            <div className={"calculator"}>
                <BeautifulScreen operation={operation} result={result}/>
                <div className={"buttonsStyle"}>
                    <FunctionButton childToParent={childToParent}/>
                    <div className={"buttons"}>
                        <NumberButton childToParent={childToParent}/>
                        <OperatorButton childToParent={childToParent}/>
                        <EqualButton equal={equal}/>
                    </div>
                </div>
            </div>
            <ItSOverNineThousand result={result}/>

        </div>
    );
}