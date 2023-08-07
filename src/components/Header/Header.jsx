import './index.scss'
import DncLogo from "../../assets/LogoDnc.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <header>
            <Link to={`/home`}><img src={DncLogo} alt="Dnc Logo" /></Link>
        </header>
    </div>
  )
}

export default Header