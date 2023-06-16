export default function BeautifulScreen({firstNumber, secondNumber, operator}) {

    // concaténation des valeurs
    let calc = firstNumber + " " + operator + " " + secondNumber;
    return (
        <div className={'screen'}>
            <input type="text" value={calc} readOnly={true}/>
        </div>
    );
}