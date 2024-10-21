import Link from 'next/link'
import Style from './navbar.module.css'

export default function Navbar(){
  return (
    <div className={Style.container}>
       
        <Link href='/' target='__blank'>Home</Link>
        <Link href='/about' target='__blank'>About</Link>
        <Link href='/services' target='__blank'>Services</Link>
        <Link href='/contact' target='__blank'>Contact</Link>
    </div>

  )
}

