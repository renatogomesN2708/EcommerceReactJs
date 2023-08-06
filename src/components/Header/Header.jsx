import './index.scss'
import DncLogo from "../../assets/LogoDnc.png"

const Header = () => {
  return (
    <div className='header'>
        <header>
            <img src={DncLogo} alt="Dnc Logo" />
        </header>
    </div>
  )
}

export default Header