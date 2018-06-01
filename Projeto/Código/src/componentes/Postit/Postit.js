import React, { Component } from 'react'
import './Postit.css'


class Postit extends Component {
    state = {
        titulo: this.props.titulo,
        texto: this.props.texto,
        editando: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormularioClick = e => {
        this.setState({ editando: true })
    }

    handleFormularioSubmit = e => {
        e.preventDefault()

        this.setState({ editando: false })

        // TODO: enviar dados para API
        console.log('titulo', this.state.titulo)
        console.log('texto', this.state.texto)
    }

    render = () => {
        let classes = ['postit']

        if (this.state.editando) {
            classes.push('postit--editando')
        }

        return (
            <form 
                className={classes.join(' ')}
                onClick={this.handleFormularioClick}
                onSubmit={this.handleFormularioSubmit}
            >
                <input 
                    className="postit__titulo"
                    type="text" 
                    name="titulo"
                    value={this.state.titulo} 
                    readOnly={!this.state.editando}
                    onChange={this.handleChange}
                    area-label="titulo"
                />

                <textarea 
                    className="postit__texto"
                    name="texto"
                    value={this.state.texto}
                    rows={5}
                    readOnly={!this.state.editando}
                    onChange={this.handleChange}
                    area-label="texto"
                />

                {this.state.editando && (
                    <button className="postit__botao">
                        Concluido
                    </button>
                )}
            </form>
        )
    }   
}

export default Postit