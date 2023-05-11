import { FC } from 'react'
import Cart from './cart/cart'
import classes from './header.module.scss'
import Menu from './menu/menu'
import Search from './search/search'

const Header: FC = () => {
 return <header className={classes.header}>
  <Menu />
  <Search />
  <Cart />
 </header>
} 

export default Header