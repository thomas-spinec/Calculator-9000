import Button from "./Button.jsx";

export default function OperatorButton({childToParent}) {
    const operators = ["+", "-", "*", "/"];
    const listOperator = operators.map((operator, id) => {
        return <Button childToParent={childToParent} value={operator} key={id}/>
    });
    return (
        <div className={"operators"}>
            {listOperator}
        </div>
    );
}