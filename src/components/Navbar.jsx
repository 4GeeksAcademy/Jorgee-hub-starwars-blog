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
							className="btn btn-primary dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites <span className="bg-secondary p-1">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.length === 0 ? (
								<li className="dropdown-item text-muted">Empty</li>
							) : (
								store.favorites.map((favorite) => (
									<li
										key={`${favorite.category}-${favorite.uid}`}
										className="dropdown-item d-flex justify-content-between align-items-center"
									>
										{favorite.name}
										<i
											onClick={(e) => {
												e.stopPropagation();
												dispatch({ type: "remove_favorite", payload: favorite });
											}}
											className="fa-solid fa-trash ms-2"
											style={{ cursor: "pointer" }}
										></i>
									</li>
								))
							)}
						</ul>
					</div>

				</div>
			</div>
		</nav >
	);
};