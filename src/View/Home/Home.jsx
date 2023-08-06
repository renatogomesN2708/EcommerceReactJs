import React from 'react'
import './index.scss'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import Products from '../Products/Products'

const Home = (props) => {
  console.log(props.data)
  return (
    <div>  
      <HeaderMenu />
      <Search />
    </div>
  )
}

export default Home