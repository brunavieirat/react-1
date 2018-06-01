import React, { Component } from 'react'
import './Menu.css'


class Menu extends Component {
    state = {
        aberto: false
    }

    abreOuFecha = () => {
        this.setState(prevState => {
            return {
                aberto: !prevState.aberto
            }
        })
    }

    handleOpcaoClick = (onOpcaoClick, e) => {
        if (this.state.aberto) {
            this.abreOuFecha()
        }

        onOpcaoClick(e)
    }

    render = () => {
        let botaoClasses = ['navbar-menu__botao']
        let opcoesClasses = ['navbar-menu__opcoes']

        if (this.state.aberto) {
            botaoClasses.push('navbar-menu__botao--aberto')
            opcoesClasses.push('navbar-menu__opcoes--aberto')
        }

        return (
            <nav className="navbar-menu">
                <a className={botaoClasses.join(' ')} onClick={this.abreOuFecha}>
                    Menu
                </a>

                <ul className={opcoesClasses.join(' ')}>
                    <li>
                        <a onClick={this.handleOpcaoClick.bind(this, this.props.onQuemSomosClick)}>
                            Quem somos
                        </a>
                    </li>
                    <li>
                        <a onClick={this.handleOpcaoClick.bind(this, this.props.onContatoClick)}>
                            Contato
                        </a>
                    </li>
                    <li>
                        <a onClick={this.handleOpcaoClick.bind(this, this.props.usuario ? this.props.onSairClick : this.props.onLoginClick)}>
                            {this.props.usuario ? 'Sair' : 'Login'}
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu