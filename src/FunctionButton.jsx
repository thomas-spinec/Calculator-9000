import Button from "./Button.jsx";

export default function FunctionButton({childToParent}) {
    const functions = ["C", "save", "Del"];
    const listFunction = functions.map((func, id) => {
        return <Button childToParent={childToParent} value={func} key={id}/>
    });
    return (
        <div className={"functions"}>
            {listFunction}
        </div>
    );
}