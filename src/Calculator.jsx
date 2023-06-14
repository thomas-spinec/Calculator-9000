import BeautifulScreen from "./BeautifulScreen.jsx";
import NumberButton from "./NumberButton.jsx";
import OperatorButton from "./OperatorButton.jsx";
import EqualButton from "./EqualButton.jsx";

// TODO: make this a smart component

export default function Calculator() {
    return (
        <div className={"calculator"}>
            <BeautifulScreen/>
            <div className={"buttons"}>
                <NumberButton/>
                <OperatorButton/>
                <EqualButton/>
            </div>
        </div>
    );
}