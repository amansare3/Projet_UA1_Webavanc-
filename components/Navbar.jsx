"use client"; 

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Link href="/" className="logo">
        <img src="/logo.png" alt="Logo" height={80} width={80} />
      </Link>

      
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/personaltraining">Personal Training</Link>
        <Link href="/">Group Classes</Link>
        <Link href="/">Membership</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
