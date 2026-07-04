import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
const CharacterCard = ({ character }) => {
    const { store, dispatch } = useGlobalReducer()
    console.log(character);
    const [details, setDetails] = useState()
    const isFavorite = store.favorites.some((fav) => fav.uid === character.uid);
    console.log(details);
    const getCharacterDetails = async () => {
        try {
            const response = await fetch(`${character.url}`)
            const data = await response.json();
            setDetails(data.result.properties);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCharacterDetails();
    }, [])
    return (
        <div className='col-auto'>
            <div className="card flex-shrink-0" style={{ width: "18rem" }}>
                <img src="https://placehold.co/400x200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">
                        Gender: {details?.gender}<br />
                        Hair Color: {details?.hair_color}<br />
                        Eye Color: {details?.eye_color}<br />
                    </p>
                    <div className='d-flex justify-content-between'>
                        <Link to="#" className="btn btn-primary">Learn more! </Link>
                        <button onClick={() =>{if (isFavorite) {
                            dispatch({type: "remove_favorite", payload: character});
                        } else {
                            dispatch({type: "add_favorite", payload: character});
                        } } } className='btn'><i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard;