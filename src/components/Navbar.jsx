import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star wars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites {store.favorites.length}
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((favorite, favoriteIndex) => {
								return (
									<li key={`${favorite.category}-${favorite.uid}`}>{favorite.name}
										<i onClick={(e) => {
											e.stopPropagation();
											dispatch({type: "remove_favorite", payload: favorite })
										}} className = "fa-solid fa-trash" ></i>
									
									</li>
						)
							})}
					</ul>
				</div>

			</div>
		</div>
		</nav >
	);
};