export default function BeautifulScreen({operation, result}) {

    return (
        <div className={'screen'}>
            <input type="text" value={operation} readOnly={true}/>
            <input type="text" value={result} readOnly={true}/>
        </div>
    );
}