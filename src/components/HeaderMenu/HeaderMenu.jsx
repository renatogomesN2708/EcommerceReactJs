import Header from '../Header/Header'
import './index.scss'
import Car from "../../assets/Car.png"

const HeaderMenu = () => {
  return (
    <div>
      <Header />
      <div className='headerMenu'>
        <ul>
          <li>Home</li>
          <li>Novidades</li>
          <li>Feminino</li>
          <li>Masculino</li>
          <li>Atendimento</li>
        </ul>
        <h2>Meu carrinho</h2>
        <img src={Car} alt="" />
        </div>
    </div>
  )
}

export default HeaderMenu