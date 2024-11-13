// src/pages/cat/CatDetails.js
export default function CatDetails(props) {
    const { name, breed } = props.catData;
    return (
        <div>
            <h2>{name}</h2>
            <p>Breed: {breed}</p>
        </div>
    );
}
