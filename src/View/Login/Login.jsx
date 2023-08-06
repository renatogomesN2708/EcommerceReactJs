import './index.scss';
import React from 'react'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Header/>
      <section className='header__info'>
            <div>
                <h1>Acesse com seu login ou cadastre-se!</h1>
                <h2>você pode entrar com o seu CPF</h2>
            </div>
            <form className='header__form'>
                <label htmlFor='name'>Digite seu CPF</label>
                <input type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder='CPF'/>
                <label htmlFor='name'>Senha</label>
                <input type="password" id='password' placeholder='Senha' />
                <Link to={`/home`}><button>Entrar</button></Link>
            </form>
        </section>
    </div>
  )
}

export default Login
