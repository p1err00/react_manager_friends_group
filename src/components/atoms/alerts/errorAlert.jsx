import React from "react";


export const ErrorAlerte = () => {

    return (
        <div className="alert-div">
            <span>Probleme de recuperation des montants lors du chargement de la page (Surement dû au useEffect)</span>

            <style jsx="true">{`
                .alert-div {
                    background-color: red;
                    text-align: center;
                    padding: 5px;
                    margin: 10px;
                }
            `}
            </style>
        </div>

    )
}