import React from 'react'
import './Botao.css'


function Botao(props) {
    let classes = ['botao']

    if (props.disabled) {
        classes.push('botao--desabilitado')
    }

    if (props.cor) {
        classes.push(`botao--${props.cor}`)
    }

    return (
        <button className={classes.join(' ')}>
            {props.children}
        </button>
    );
}

export default Botao