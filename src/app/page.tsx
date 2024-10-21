import Image from "next/image";
import styles from "./page.module.css";
import Style from './page.module.css'
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div className={Style.background}>
      <Navbar/>
      <h1 className={Style.h}>Welcome to My Website</h1>
      <p className={Style.p}>This is My Home Page</p>
    </div>
  )
}