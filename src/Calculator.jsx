import BeautifulScreen from "./BeautifulScreen.jsx";
import NumberButton from "./NumberButton.jsx";
import OperatorButton from "./OperatorButton.jsx";
import EqualButton from "./EqualButton.jsx";
import {useState} from "react";
import ItSOverNineThousand from "./ItSOverNineThousand.jsx";

// TODO: make this a smart component

export default function Calculator() {
    const listNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // faire un tableau avec 3 éléments
    const [firstNumber, setFirstNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState("");
    const [data, setData] = useState('');
    const [calc, setCalc] = useState('');

    const childToParent = (childValue) => {
        setData(childValue);
        addNumber(childValue);
    }

    const equal = (buttonEqual) => {
        setCalc(buttonEqual);
        calculate(firstNumber, operator, secondNumber);
    }

    function calculate(firstNumber, operator, secondNumber) {
        // on convertit les nombres en entier
        let first = parseInt(firstNumber);
        let second = parseInt(secondNumber);
        // on fait le calcul
        let result = 0;
        switch (operator) {
            case "+":
                result = first + second;
                break;
            case "-":
                result = first - second;
                break;
            case "*":
                result = first * second;
                break;
            case "/":
                result = first / second;
                break;
            default:
                break;
        }
        // on transforme le résultat en string
        result = result.toString();
        // on met à jour le state
        setFirstNumber(result);
        setOperator("");
        setSecondNumber("");
        setResult(result);
    }

    function addNumber(number) {
        if (!isNaN(number)) {
            if (operator === "") {
                let firstElement = firstNumber.toString();
                let concat = firstElement.concat(number.toString());
                setFirstNumber(concat);
            } else {
                let thirdElement = secondNumber.toString();
                let concat = thirdElement.concat(number.toString());
                setSecondNumber(concat);
            }
        } else {
            if (operator === '') {
                setOperator(number)
            } else {
                calculate(firstNumber, operator, secondNumber);
                setOperator(number);
            }
        }
    }


    return (
        <div>
            <div className={"calculator"}>
                <BeautifulScreen firstNumber={firstNumber} operator={operator} secondNumber={secondNumber}/>
                <div className={"buttons"}>
                    <NumberButton childToParent={childToParent}/>
                    <OperatorButton childToParent={childToParent}/>
                    <EqualButton equal={equal}/>
                </div>
            </div>
            <ItSOverNineThousand result={result}/>
        </div>
    );
}