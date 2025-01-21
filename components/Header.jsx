import styles from './Header.module.css';

import Image from 'next/image';

import logo from '../public/logo.png';

import Link from 'next/link'; 

export default function Header() {
    return <header className={styles.header}>
        <nav> 
            <ul>
    <li>
    <Link href='/'>Acceuil</Link>
    </li>
    <li>
    <Link href='/Yoga'>Yoga Classes</Link>
    </li>
    </ul>
    <Image src={logo} alt="Logo" className='styles.logo'width={200} height={200}/>
    </nav>
</header>
}