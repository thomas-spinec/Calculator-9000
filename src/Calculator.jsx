import BeautifulScreen from "./BeautifulScreen.jsx";
import NumberButton from "./NumberButton.jsx";
import OperatorButton from "./OperatorButton.jsx";
import EqualButton from "./EqualButton.jsx";

export default function Calculator() {
    return (
        <>
            <div className={"calculator"}>
                <BeautifulScreen/>
                <NumberButton/>
                <OperatorButton/>
                <EqualButton/>
            </div>
        </>
    );
}