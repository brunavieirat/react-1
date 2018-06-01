import React from 'react'
import './Grupo.css'


function Grupo(props) {
    return (
        <div className="grupo">
            {props.children}

            {props.erro && (
                <p className="grupo__erro">
                    {props.erro}
                </p>
            )}
        </div>
    )
}

export default Grupo