import React from "react";

const Item = ({id, name, desc, price, category, img}) => {
    return (
        <div className="col-md-4">
            <div className="card" style={{width: 18+'rem'}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">US${price}</li>
                </ul>
            </div>
        </div>
        

    )
}

export default Item;