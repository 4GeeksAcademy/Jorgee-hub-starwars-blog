import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';

const PlanetCard = ({ planet }) => {
    const { store, dispatch } = useGlobalReducer()
    const [planetDetails, setPlanetDetails] = useState(null)

    const isFavorite = store.favorites.some((fav) => fav.uid === planet.uid && fav.category === "planets");

    const getPlanetDetails = async () => {
        try {
            const response = await fetch(planet.url)
            const data = await response.json();
            setPlanetDetails(data.result.properties);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPlanetDetails();
    }, [planet.url])

    return (
        <div className='col-auto'>
            <div className="card flex-shrink-0" style={{ width: "18rem" }}>
                <img src="https://placehold.co/400x200" className="card-img-top" alt={planet.name} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{planet.name}</h5>

                    
                    <p className="card-text text-secondary">
                        Population: {planetDetails?.population || "Cargando..."}<br />
                        Terrain: {planetDetails?.terrain || "Cargando..."}<br />
                        Climate: {planetDetails?.climate || "Cargando..."}<br />
                    </p>

                    <div className='d-flex justify-content-between align-items-center'>
                        
                        <Link to={`/learnmore/planets/${planet.uid}`} className="btn btn-primary">
                            Learn more!
                        </Link>

                        <button onClick={() => {
                            if (isFavorite) {
                                dispatch({ type: "remove_favorite", payload: { ...planet, category: "planets" } });
                            } else {
                                dispatch({ type: "add_favorite", payload: { ...planet, category: "planets" } });
                            }
                        }} className='btn'>
                            <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard;
