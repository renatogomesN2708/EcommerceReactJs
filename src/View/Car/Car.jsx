import React, { Component } from 'react'
import './index.scss'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import { Link } from 'react-router-dom'


export default class Car extends Component {
  render() {
    return (
      <div>
        <HeaderMenu/>
        <div className='car-detail'>
          <div className='car-detail__left-side'>
            <form className='car-detail__form'>
              <div className='car-detail__input-wrapper'>
                <label htmlFor='name'>Nome:</label>
                <input 
                  type="text"
                  placeholder='Nome completo'
                  id='name'
                  className='car-detail__input-name'
                  />
                  <label htmlFor="entrega">Endereço de entrega
                  </label>
                  <input 
                    type="text"
                    id='entrega'
                    placeholder='Endereço de entrega'
                    />
              </div>
              <div className='car-detail__format'>
                <h2>Forma de pagamento:</h2>
                <div className='car-detail__pix'>
                  <input type="checkbox" id='pix' name='format' />
                  <label htmlFor="pix">Pix</label>
                </div>
                <div className='car-detail__boleto'>
                  <input type="checkbox" id='boleto' name='format' />
                </div>
                <div className='car-detail__crcedit-card'>
                  <input type="checkbox" id='credit-card' name='format' />
                  <label htmlFor="credit-card">Cartão de crédito</label>
                </div>
              </div>
              
              <button>
                <Link to={`/home`}>Enviar Pedido</Link>
              </button>
            </form>
          </div>
          <div className='car-detail__right-side'>
            <h1>Resumo do pedido:</h1>
            <div className='car-detail__product-price'>
              <div className='car-detail__description'>Produtos (1)
              :</div>
              <h1>{selectedProduct.price}</h1>
            </div>
            <div className='car-detail__product-total'>
              <div className='car-detail__description'>
                <h1>{selectedProduct.price}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
