import Link from "next/link"
import { FC } from "react"
import { IMenuLink } from "../menuTypes"
import classes from './menuItem.module.scss'


interface IMenuItem{
 item: IMenuLink
}
const MenuItem: FC<IMenuItem> = ({ item }) => {
 const{name, link} = item
 return (
  <li className={classes.menuItem}>
   <Link href={link}>{name }</Link>
  </li>
 )
}
export default MenuItem