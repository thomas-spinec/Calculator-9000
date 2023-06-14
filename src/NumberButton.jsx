import Button from "./Button.jsx";

export default function NumberButton() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listButton = numbers.map((number, id) => {
        return <Button value={number} key={id}/>
    });
    return (
        <div className={"numbers"}>
            {listButton}
        </div>
    );
}