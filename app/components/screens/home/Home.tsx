import Header from "@/components/layout/header/header"
import Layout from "@/components/layout/layout"
import { FC } from "react"
import classes from './home.module.scss'

const Home: FC = () => {
  return (
    <Layout title='Home'>
      <Header />
      <div className={classes.home}>
        <h1 className={classes.header}>
          Hello world
        </h1>
      </div>
    </Layout>
  )
}

export default Home