import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cssStyle from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={cssStyle.container}>
      <div className={cssStyle.logo}>
        <Image src='https://st4.depositphotos.com/21557188/23281/v/1600/depositphotos_232817532-stock-illustration-graduation-cap-education-icon-white.jpg' 
        alt="Logo" 
        width={70} 
        height={70} 
        /> 
         <h1 className={cssStyle.h1}>Education</h1>
      </div>
      <div className={cssStyle.navbar}>
        <Link href="/" target="__blank">Home</Link>
        <Link href="/" target="__blank">Programe</Link>
        <Link href="/" target="__blank">About us</Link>
        <Link href="/" target="__blank">Teachers</Link>
        <Link href="/" target="__blank">Contact</Link>
        <Link href="/" target="__blank"><button className={cssStyle.btn}>Contact us</button></Link>
      </div>
    </div>
  );
}

