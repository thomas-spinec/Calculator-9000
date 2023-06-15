export default function BeautifulScreen({calc}) {

    return (
        <div className={'screen'}>
            <input type="text" value={calc} readOnly={true}/>
        </div>
    );
}