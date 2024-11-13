import { useEffect } from 'react';
import catData from '../../../data/cat-data.json';
import CatImage from './catImage';
import CatDetails from './CatDetails';

export default function Cat() {
    useEffect(() => {
        console.log(catData);
    }, []);

    return (
        <div>
            <h1>Hi, I'm a cat.</h1>
            <CatImage catData={catData} />
            <CatDetails catData={catData} />
        </div>
    );
}

