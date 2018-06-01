import React, { Component } from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import './Login.css'


class Login extends Component {
    state = { 
        email: {},
        senha: {}
    }

    handleSubmit = e => {
        e.preventDefault()

        if (!this.estaDesabilitado()) {
            // TODO: enviar os dados para o Backend
            console.log("email", this.state.email.valor)
            console.log("senha", this.state.senha.valor)

            this.props.onEnviarClick()
        }
    }

    handleChange = (nome, valor, erro) => {
        this.setState({
            [nome]: { valor, erro }
        })
    }

    estaDesabilitado() {
        return !this.state.email.valor || 
                this.state.email.erro ||
               !this.state.senha.valor || 
                this.state.senha.erro
    }
    
    render() {
        return (
            <div className="login">
                <Formulario 
                    titulo="Login" 
                    texto="Entre com seu email e senha."
                    onSubmit={this.handleSubmit}
                >
                    <Formulario.Grupo erro={this.state.email.erro}>
                        <Formulario.Legenda htmlFor="email">
                            Email:
                        </Formulario.Legenda>
                        <Formulario.CaixaTexto 
                            id="email"
                            type="email" 
                            name="email"
                            placeholder="Email"
                            required
                            onChange={this.handleChange} 
                        />
                    </Formulario.Grupo>

                    <Formulario.Grupo erro={this.state.senha.erro}>
                        <Formulario.Legenda htmlFor="email">
                            Senha:
                        </Formulario.Legenda>
                        <Formulario.CaixaTexto
                            id="email" 
                            type="password" 
                            name="senha" 
                            placeholder="Senha"
                            minLength={6}
                            required 
                            onChange={this.handleChange}
                        />
                    </Formulario.Grupo>

                    <Formulario.Botao disabled={this.estaDesabilitado()}>
                        Enviar
                    </Formulario.Botao>

                    <Formulario.Link onClick={this.props.onContaClick}>
                        Criar uma conta
                    </Formulario.Link>
                </Formulario>
            </div>
        )
    }
}

export default Login