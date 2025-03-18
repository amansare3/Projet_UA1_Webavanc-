"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../public/logo.png";
//rend la barre de navigation
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="Logo" height={80} width={80} />
      </Link>

      <div className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <nav className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/personaltraining">Personal Training</Link>
        <Link href="/">Group Classes</Link>
        <Link href="/">Membership</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
