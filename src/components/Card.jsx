import React from 'react'
import { Link } from 'react-router-dom';
const Card = ({character}) => {
    console.log(character);
    return (
        <div className='col-auto'>
            <div className="card flex-shrink-0" style={{width:"18rem;"}}>
                <img src="" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <Link to="#" className="btn btn-primary">Learn more! </Link>
                    </div>
            </div>
        </div>
    )
}

export default Card;