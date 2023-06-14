import Button from "./Button.jsx";

export default function NumberButton() {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    const listButton = numbers.map((number, id) => {
        return <Button value={number} key={id}/>
    });
    return (
        <div className={"numbers"}>
            {listButton}
        </div>
    );
}