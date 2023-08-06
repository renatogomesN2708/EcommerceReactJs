import './index.scss'
import lupa from "../../assets/Lupa.png"
import Person from "../../assets/person.png"
import Coracao from "../../assets/coração.png"
const Search = () => {
  return (
    <div className='search'>
      <div>
        <input type="text" placeholder='O que você está procurando?'/>
        <img className='search__img' src={lupa} alt="" />
      </div>
      <section className='search__icones'>
        <img src={Person} alt="" />
        <img src={Coracao} alt="" />
      </section>

    </div>
  )
}

export default Search