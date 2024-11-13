// src/pages/cat/CatImage.js
export default function CatImage(props) {
    const imgURL = props.catData.image_link; // Correct reference to the property
    return <img src={imgURL} alt="Cat" />;
}
