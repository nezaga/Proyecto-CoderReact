import React from "react";

const Item = (item) => {
    return (
        <div className="col-md-4" style={{width: 18 +'rem'}}>
            <div className="card">
                <a href="#" /*Este será el link al detalle del producto*/> 
                    <img src={item.pictureURL} className="card-img-top" alt={item.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center">US${item.price}</li>
                        <li className="list-group-item">Stock Disponible: {item.stock}</li>
                    </ul>
                </a>
            </div>
        </div>
        

    )
}

export default Item;