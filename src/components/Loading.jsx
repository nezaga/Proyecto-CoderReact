import React from "react";
import Spinner from "../img/loading.gif"

const Loading = () => {
    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <h4>Mezclando, por favor aguardá</h4>
                <img src={Spinner} alt="Hands stirring a cocktail" width="35%" />
            </div>
        </div>
    )
}

export default Loading;