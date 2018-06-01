import React, { Component } from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import './Conta.css'


class Conta extends Component {
    state = { 
        nome: {},
        telefone: {},
        email: {},
        senha: {}
    }

    handleSubmit = e => {
        e.preventDefault()

        // TODO: enviar os dados para API
        console.log("nome", this.state.nome.valor)
        console.log("telefone", this.state.telefone.valor)
        console.log("email", this.state.email.valor)
        console.log("senha", this.state.senha.valor)
    }

    handleChange = (nome, valor, erro) => {
        this.setState({
            [nome]: { valor, erro }
        })
    }

    deveDesabilitar() {
        return !this.state.nome.valor ||
                this.state.nome.erro || 
               !this.state.telefone.valor || 
                this.state.telefone.erro ||
               !this.state.email.valor || 
                this.state.email.erro ||
               !this.state.senha.valor || 
                this.state.senha.erro
    }
    
    render() {
        return (
            <div className="conta">
                <Formulario 
                    titulo="Conta" 
                    texto="Preencha e envie o formulário para criar uma conta!"
                    onSubmit={this.handleSubmit}
                >
                    <Formulario.Grupo erro={this.state.nome.erro}>
                        <Formulario.Legenda htmlFor="nome">
                            Nome:
                        </Formulario.Legenda>
                        <Formulario.CaixaTexto 
                            id="nome"
                            type="text" 
                            name="nome" 
                            placeholder="Nome"
                            minLength={10} 
                            required
                            onChange={this.handleChange}
                        />
                    </Formulario.Grupo>

                    <Formulario.Grupo erro={this.state.telefone.erro}>
                        <Formulario.Legenda htmlFor="telefone">
                            Telefone:
                        </Formulario.Legenda>
                        <Formulario.CaixaTexto 
                            id="telefone"
                            type="tel" 
                            name="telefone"
                            placeholder="Telefone"
                            required
                            onChange={this.handleChange} 
                        />
                    </Formulario.Grupo>

                    <Formulario.Grupo erro={this.state.email.erro}>
                        <Formulario.Legenda htmlForm="email">
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
                        <Formulario.Legenda htmlFor="senha">
                            Senha:
                        </Formulario.Legenda>
                        <Formulario.CaixaTexto 
                            id="senha"
                            type="password" 
                            name="senha" 
                            placeholder="Senha"
                            minLength={6}
                            required 
                            onChange={this.handleChange}
                        />
                    </Formulario.Grupo>

                    <Formulario.Botao disabled={this.deveDesabilitar()}>
                        Enviar
                    </Formulario.Botao>

                    <Formulario.Link onClick={this.props.onLoginClick}>
                        Fazer login
                    </Formulario.Link>
                </Formulario>
            </div>
        )
    }
}

export default Conta