import Button from "./Button.jsx";

export default function OperatorButton() {
    const operators = ["+", "-", "*", "/"];
    const listOperator = operators.map((operator, id) => {
        return <Button value={operator} key={id}/>
    });
    return (
        <div className={"operators"}>
            {listOperator}
        </div>
    );
}