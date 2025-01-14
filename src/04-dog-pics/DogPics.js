import { useEffect, useState } from 'react';

const getDogPic = async function name(params) {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = await response.json();
    return dog.message;
}

export default function DogPics() {
    const [dogPic, setDogPic] = useState('https://images.dog.ceo/breeds/whippet/n02091134_16337.jpg');
    useEffect(() => {
        getDogPic().then(pic => setDogPic(pic))
    }, []);


    // API: https://dog.ceo/dog-api/
    return (
        <div className='dog-pics'>
            <img src={dogPic} />
            <button onClick={async e => setDogPic(await getDogPic())}>🐶</button>
        </div>
    )
}