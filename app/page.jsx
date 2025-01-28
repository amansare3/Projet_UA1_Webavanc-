import Section1 from '@/components/Section1';
import './page.module.css'
import Slogan from '@/components/Slogan';
import Navbar from '@/components/Navbar';



    

export default function Acceuil() {
    return <>
   
    <Navbar></Navbar>
   
 <section>
        <Slogan></Slogan>
        <br /> <br /> <br />
       
    </section>
    
    <section>
    <Section1></Section1>
    </section>
    </>
    
}