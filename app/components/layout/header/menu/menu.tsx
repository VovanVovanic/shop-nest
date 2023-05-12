import Link from "next/link"
import Image from "next/image"
import { FC, useMemo } from "react"
import classes from './menu.module.scss'
import { menuLinks } from "./menuData"
import { IMenuLink } from "./menuTypes"
import MenuItem from "./menuItem/menuItem"


const Menu: FC = () => {
 const items = useMemo(() => {
  return menuLinks.map((el: IMenuLink) => {
   return <MenuItem item={el} />
  })
 }, [menuLinks])

 return (
  <div className={classes.menu}>
   <Link href={"/"}>
    <Image src='/images/logo.png' alt="logo" width={100} height={100} />
   </Link>
   <nav>
    <ul>
     {items}
    </ul>
   </nav>
  </div>
 )
}
export default Menu