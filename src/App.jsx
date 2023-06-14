import BeautifulScreen from "./BeautifulScreen.jsx";
import NumberButton from "./NumberButton.jsx";

export default function App() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listButton = numbers.map((number, id) => {
        return <NumberButton value={number} key={id}/>
    });
    return (
        <>
            <div>
                <h1>Calculator9000</h1>
            </div>
            <BeautifulScreen/>
            <div className={"numbers"}>
                {listButton}
            </div>
        </>

    );
}