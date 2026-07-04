import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";
import { useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const getStarWarsPeople = async () => {
			try {
				const response = await fetch ("https://swapi.tech/api/people")
				const data = await response.json();
				dispatch({type:"add_characters", payload:data.results});
			} catch (error) {
				console.log(error);
			}
		}
	useEffect(() => {
		getStarWarsPeople();
	},[])
	return (
		<div className="container">
			<h3 className="fw-bold my-3 text-danger">Personajes</h3>
			<div className="row flex-nowrap overflow-x-auto">{/* Characters */}
				{store.characters.map((character,index)=>{
					return(
						<Card key={character.uid} character={character}/>
					)
				})}
			</div>
			<h3 className="fw-bold my-3 text-danger">Planetas</h3>
			{/* <div className="row flex-nowrap overflow-x-auto">

			</div> */}

		</div>
	);
}; 