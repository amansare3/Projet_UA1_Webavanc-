import './Navbar.css'

import Link from 'next/link';

const Navbar = () => {
    return ( 
        <header className='header'>
            <a href= "/" className='logo'> <img src="/logo.png" alt="" height={100} width={100}/></a>

            <nav className='navbar'>
        <Link href='/'>Home</Link>
        <Link href='/personaltraining'>Personal training</Link>
        <Link href='/'>Group classes</Link>
        <Link href='/'>Membership</Link>
        <Link href='/'>Contact</Link>
        </nav>
            </header>

    )
}

export default Navbar