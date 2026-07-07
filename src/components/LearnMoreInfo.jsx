import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LearnMoreInfo = () => {
    const { category, uid } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiCategory = category === "characters" ? "people" : "planets";

    useEffect(() => {
        const getDetails = async () => {
            setLoading(true);
            try {

                const response = await fetch(`https://swapi.tech/api/${apiCategory}/${uid}`);
                const data = await response.json();

                if (data.result && data.result.properties) {
                    setDetails(data.result.properties);
                }
            } catch (error) {
                console.error("Error al conectar con el espacio:", error);
            } finally {
                setLoading(false);
            }
        };

        getDetails();
    }, [category, uid]);


    if (loading) {
        return (
            <div className="container text-center my-5">
                <div className="spinner-border text-danger" role="status"></div>
                <p className="mt-3 text-secondary">Cargando...</p>
            </div>
        );
    }

    if (!details) {
        return <div className="container text-center my-5">No se encontró información en esta galaxia.</div>;
    }


    const isCharacter = category === "characters";

    return (
        <div className="container my-5">
            <div className="row align-items-center mb-5">
                <div className="col-12 col-md-6">
                    <img
                        src={`https://placehold.co/800x600?text=${encodeURIComponent(details.name || "No Image")}`}
                        className="img-fluid"
                        alt={details.name}
                    />
                </div>
                <div className="col-12 col-md-6 text-center text-md-start ps-md-4">

                    <h1 className="display-4 fw-normal">{details.name}</h1>
                    <p className="text-muted mt-3" style={{ textAlign: "justify" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur cupiditate quaerat iusto odio iure dolores, ullam, dolor possimus ea distinctio unde commodi? Adipisci ut distinctio sequi reprehenderit reiciendis nemo.
                    </p>
                </div>
            </div>


            <div className="row text-center row-cols-3 row-cols-md-6 g-3 pt-4 border-top border-danger border-2">
                {isCharacter ? (

                    <>
                        <div className="col">
                            <div className="text-danger fw-semibold">Name</div>
                            <div className="text-secondary small mt-1">{details.name || "n/a"}</div>
                        </div>
                        <div className="col">
                            <div className="text-danger fw-semibold">Birth Year</div>
                            <div className="text-secondary small mt-1">{details.birth_year || "n/a"}</div>
                        </div>
                        <div className="col">
                            <div className="text-danger fw-semibold">Gender</div>
                            <div className="text-secondary small mt-1">{details.gender || "n/a"}</div>
                        </div>
                        <div className="col">
                            <div className="text-danger fw-semibold">Height</div>
                            <div className="text-secondary small mt-1">{details.height || "n/a"}</div>
                        </div>
                        <div className="col">
                            <div className="text-danger fw-semibold">Skin Color</div>
                            <div className="text-secondary small mt-1">{details.skin_color || "n/a"}</div>
                        </div>
                        <div className="col">
                            <div className="text-danger fw-semibold">Eye Color</div>
                            <div className="text-primary small mt-1">{details.eye_color || "n/a"}</div>
                        </div>
                    </>
                ) : (

                    <>
                        <div className="col">
                            <div className="text-danger fw-semibold">Name</div>
                            <div className="text-secondary small mt-1">{details.name || "n/a"}</div>
                        </div>
                        <div className="col">
                            <div className="text-danger fw-semibold">Climate</div>
                            <div className="text-secondary small mt-1">{details.climate || "n/a"}</div>
                        </div>
                        <div className="col">
                            <div className="text-danger fw-semibold">Population</div>
                            <div className="text-secondary small mt-1">{details.population || "n/a"}</div>
                        </div>
                        <div className="col">
                            <div className="text-danger fw-semibold">Orbital Period</div>
                            <div className="text-secondary small mt-1">{details.orbital_period || "n/a"}</div>
                        </div>
                        <div className="col">
                            <div className="text-danger fw-semibold">Rotation Period</div>
                            <div className="text-secondary small mt-1">{details.rotation_period || "n/a"}</div>
                        </div>
                        <div className="col">
                            <div className="text-danger fw-semibold">Diameter</div>
                            <div className="text-secondary small mt-1">{details.diameter || "n/a"}</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LearnMoreInfo;
