import Link from 'next/link';
import Head from 'next/head';
import header_module from '../styles/layout/header.module.css';
import Link_button from './utils/Link_button';
import Contact from '../components/Contact';
import { isMobile } from "react-device-detect";


const shadow_images = {
  width: "50px",
  margin: "0 auto",
  filter: "drop-shadow(3px 3px 3px var(--button-blue))",
  hover: "opacity: '0.9'"  
}

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio | Yann METIER</title>
        <meta
          name="description"
          content="Portfolio d'un web développeur français, full-stack, avec une année d'expérience. J'ai travaillé à Inconito et Web6 deux sociétés basées sur Toulouse."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <meta properity="og:type" contenu="siteweb" />
        <meta property="og:url" contenu="https://portfolio-1idtcrv22.vercel.app/" />
        <meta property="og:image" contenu="/images/moi.png"/>
        <meta property="og:locale" contenu="fr_FR"/>
        <meta property="og:description" contenu="Mon portfolio professionnel, ce site web regroupera mes informations concernant mes activités au sein du marché du travail."/>
      </Head>
      <header className={header_module.header}>
        <nav className={header_module.nav}>
          <Link href="/" ><a aria-label="Portrait de Yann METIER, un click dessus retourne à la page d'accueil"><img className={header_module.logo} src="/images/moi.png" alt="Profil du web développeur" /></a></Link>
          <div className={header_module.links}>
            <Link href="projects"><a className={header_module.link} aria-label="Lien vers la page mes projets">Mes projets</a></Link>
            <Contact link />
          </div>
        </nav>
      </header>

      <main>{children}</main>
      {!home && (
        <Link_button>
          Accueil
        </Link_button>
      )
      }
      <footer className="m-8 border-t-2 border-solid border-gray-300 text-gray-700 flex items-center justify-around">
        <div className="p-6">
          <ul>
            <li className="m-16 text-center">
              <Link href="projects" ><a className={header_module.link} aria-label="Lien vers la page mes projets">Mes projets</a></Link>
            </li>
            <li className="m-16 text-center">
              <Contact link />
            </li>
          </ul>
        </div>
        <div className="p-6">
          <ul className="">
            <li className="m-12 text-center">
             <a href="https://twitter.com/Anonymze" target="_blank" aria-label="Lien sortant vers mon Twitter"><img className="hover:opacity-75" style={ shadow_images } src="/images/socials/twitter.png" aria-label="Logo twitter" /></a>
            </li>
            <li className="m-12 text-center">
             <a href="https://www.facebook.com/yann.metier/" target="_blank" aria-label="Lien sortant vers mon facebook"><img className="hover:opacity-75" style={ shadow_images } style={ shadow_images } src="/images/socials/facebook.png" aria-label="Logo facebook" /></a>
            </li>
            <li className="m-12 align-center">
              <p className={header_module.link}>@discord: Ano#9999</p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
