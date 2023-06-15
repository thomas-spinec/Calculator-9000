import BeautifulScreen from "./BeautifulScreen.jsx";
import NumberButton from "./NumberButton.jsx";
import OperatorButton from "./OperatorButton.jsx";
import EqualButton from "./EqualButton.jsx";
import {useState} from "react";

// TODO: make this a smart component

export default function Calculator() {
    const [calculator, setCalculator] = useState([]);

    function handleClick(e) {
        console.log(e.target.textContent);
        // faire en sorte de  pouvoir utiliser la valeur du bouton dans calculator.jsx
    }

    function addNumber(number) {
        setCalculator([...calculator, number]);
        console.log(calculator);
    }


    return (
        <div className={"calculator"}>
            <BeautifulScreen calc={calculator}/>
            <div className={"buttons"}>
                <NumberButton onClick={(e) => handleClick(e)}/>
                <OperatorButton/>
                <EqualButton/>
            </div>
        </div>
    );
}