"use client"

import Link from 'next/link';
import React  from 'react';
import styles from './navbar.module.css';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    }
]


const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Damien Bigot</Link>
        <div className={styles.links}>
            {links.map(link=>(
                <Link key={link.id} href={link.url} className={styles.link}>
                    {link.title}
                </Link>
            ))}
        <button className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500" onClick={()=>{console.log("loggged out")}}>Logout</button>
        </div>
    
    </div>
    
  );
}

export default Navbar