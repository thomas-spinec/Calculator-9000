export default function Button({childToParent, value}) {
    // TODO : lors du clic, ajouter la valeur du bouton dans le tableau

    const data = value;
    return (
        <button onClick={() => childToParent(data)}>{value}</button>
    );
}