import { FC, PropsWithChildren } from "react";
import classes from './layout.module.scss'
import Meta, { ISeo } from "./meta/meta";

const Layout: FC<PropsWithChildren<ISeo>> = ({ children, ...args }) => {
 return (
  <>
   <Meta />
   <div className={classes.layout}>
    <main>
     {/* <Header /> */}
     <section className={classes.section}>{children}</section>
    </main>
   </div>
  </>
 )
}

export default Layout