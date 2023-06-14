import Button from "./Button.jsx";

export default function NumberButton() {
    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const listButton = numbers.map((number, id) => {
        return <Button value={number} key={id}/>
    });
    return (
        <div className={"numbers"}>
            {listButton}
        </div>
    );
}