import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
const PlanetCard = ({ planet }) => {
    const { store, dispatch } = useGlobalReducer()
    console.log(planet);
    const [planetDetails, setPlanetDetails] = useState()
    const isFavorite = store.favorites.some((fav) => fav.uid === planet.uid && fav.category === "planets");
    console.log(planetDetails);
    const getPlanetDetails = async () => {
        try {
            const response = await fetch(`${planet.url}`)
            const data = await response.json();
            setPlanetDetails(data.result.properties);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPlanetDetails();
    }, [])
    return (
        <div className='col-auto'>
            <div className="card flex-shrink-0" style={{ width: "18rem" }}>
                <img src="https://placehold.co/400x200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nobis dignissimos laboriosam ad inventore aspernatur quibusdam. Minima ad eum accusamus!
                    </p>
                    <div className='d-flex justify-content-between'>
                        <Link to="#" className="btn btn-primary">Learn more! </Link>
                        <button onClick={() => {
                            if (isFavorite) {
                                dispatch({ type: "remove_favorite", payload: { ...planet, category: "planets" } });
                            } else {
                                dispatch({ type: "add_favorite", payload: { ...planet, category: "planets" } });
                            }
                        }} className='btn'><i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard;