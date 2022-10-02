import React from "react";

const Success = ({id}) => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h1>¡Felicitaciones!</h1>
                <p>Tu pedido se generó con éxito.</p>
                <p>Código de seguimiento: <b>{id}</b>.</p>
            </div>
        </div>
    )
}

export default Success;