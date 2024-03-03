import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Spline from '@splinetool/react-spline'
import Head from 'next/head'

export default function Home() {

  return (
    <main
    className={styles.main}
    >
      <header>
      <div className={styles.navbar}>
         <div className={styles.logo_menu}>
         <Image className={styles.logo} src="/images/Logo.png" height={70} width={98} />
         
         </div>
         <div className={styles.work}>
         <Link className={styles.link}  href="/projects">
       <button  className={styles.button}>Sign Up</button>
       
           </Link>
       </div>
       <div className={styles.home}>
         <Link className={styles}  href="/projects">
       <button  className={styles.button}>Home</button>
       
           </Link>
       
       </div>
       <div className={styles.home}>
       <Link className={styles.cart}  href="/projects">
       <button  className={styles.button}>Cart</button>
       
           </Link>
           </div>
       </div>
       

      </header>
      <div className={styles.content}>
      <Image className={styles.hero} src="/images/rolling-stones.jpeg" height={500} width={1200}/>
      <div className={styles.spline_container}>
      <Spline scene="https://prod.spline.design/VhXTC3ek0tNRml9q/scene.splinecode" />
      </div>
      <h1 className={styles.title}>Get a chance to win tickets</h1>
      
      
      <div  className={styles.card_container}>
      <Spline scene="https://prod.spline.design/73RLNiy6QusdK3Rx/scene.splinecode" />
      
   
     
      </div>
      <div className={styles.spline_container_two}>
      <Spline scene="https://prod.spline.design/h0LfTIdiFSxanhvG/scene.splinecode" />
      </div>
      </div>
      <div className={styles.subbanner}>
      <h1 className={styles.title_two}>About TuneTrove</h1>
      <h2 className={styles.paragraph}>Welcome! TuneTrove a music web application for music enthusiasts that focuses on creating immersive visualizers of top genres, artists, and trends, artist profiles, and access to upcoming music events all in one website.</h2>
      </div>
      <div className={styles.subscribe}>
        <button className={styles.button}>Subscribe</button>
        <input className={styles.input} placeholder='Subscribe'/>
      </div>

     <div className={styles.footer}>
      <div className={styles.line}></div>
      <h2>© Ivona Ivkovic</h2>
     </div>
 
    </main>
  )
}
