import styles from './Header.module.css';

import Image from 'next/image';

import logo from '../public/logo.png';

export default function Header() {
    return <header className={styles.header}>


    <Image src={logo} alt="Logo" className='styles.logo'width={200} height={200}/>

</header>
}