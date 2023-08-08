import React, { Component } from 'react'
import './index.scss'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'


const Car = ({ data }) => {
  const { carId } = useParams();
  const selectedProduct = data.find((product) => product.id == 
  carId)
  return (
    <div>
        <Header/>
        <div className='car-detail'>
          <div className='car-detail__left-side'>
            <form className='car-detail__form'>
              <div className='car-detail__input-wrapper'>
                <label className='labelOne' htmlFor='name'>Nome:</label>
                <input 
                  type="text"
                  placeholder='Nome completo'
                  id='name'
                  className='car-detail__input-name'
                  />
                  <label className='labelOne' htmlFor="entrega">Endereço de entrega
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
                  <label id='labelPix' htmlFor="pix">Pix</label>
                </div>
                <div className='car-detail__boleto'>
                  <input type="checkbox" id='boleto' name='format' />
                  <label id='labelBoleto' htmlFor="Boleto">Boleto</label>
                </div>
                <div className='car-detail__credit-card'>
                  <input type="checkbox" id='credit-card' name='format' />
                  <label id='labelCredit' htmlFor="credit-card">Cartão de crédito</label>
                </div>
              </div>
             <div className='car-detail__button'>
               <Link to={`/home`}>
                 <button>
                   Enviar Pedido
                 </button>
               </Link>
             </div>
            </form>
          </div>
          <div className='car-detail__right-side'>
            <pre className='h1Principal' >Resumo do pedido:</pre>
            <div className='car-detail__product-price'>
              <div className='car-detail__description'><p className='produto'>Produtos (1):</p>
               </div>
              <h1 className='priceCima'>{selectedProduct.price}</h1>
            </div>
            <div className='car-detail__border-line'></div>
            <div className='car-detail__product-total'>
              <div className='car-detail__description'>
                <p className='total'>Total</p>
                <h1 className='priceBaixo'>{selectedProduct.price}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Car