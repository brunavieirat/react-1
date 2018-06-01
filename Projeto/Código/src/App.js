import React, { Component } from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import './App.css'


// Este componente é como se fosse o body do HTML
class App extends Component {
  state = { 
    usuario: false,
    tela: '/login'
  }

  logaUsuario = () => {
    this.setState({ 
      usuario: true, 
      tela: '/' 
    })
  }

  deslogaUsuario = () => {
    this.setState({ 
      usuario: false, 
      tela: '/login' 
    })
  }

  abreTela = (tela, e) => {
    e.preventDefault()
    this.setState({tela: tela})
  }

  render = () => {
    return (
      <div className="App">
        <Navbar 
          usuario={this.state.usuario} 
          onLogoClick={this.abreTela.bind(this, this.state.usuario ? '/' : '/login')}
          onContatoClick={this.abreTela.bind(this, '/contato')}
          onQuemSomosClick={this.abreTela.bind(this, '/quem-somos')}
          onLoginClick={this.abreTela.bind(this, '/login')} 
          onSairClick={this.deslogaUsuario}
        />

        {this.state.tela === '/' && (
          <Home />
        )}
        {this.state.tela === '/login' && (
          <Login 
            onEnviarClick={this.logaUsuario}
            onContaClick={this.abreTela.bind(this, '/conta')} 
          />
        )}
        {this.state.tela === '/conta' && (
          <Conta onLoginClick={this.abreTela.bind(this, '/login')} />
        )}
        {this.state.tela === '/contato' && (
          <Contato />
        )}
        {this.state.tela === '/quem-somos' && (
          <QuemSomos />
        )}
      </div>
    );
  }
}

export default App