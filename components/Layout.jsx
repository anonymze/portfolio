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
        <title>Yann | Portfolio</title>
        <meta
          name="description"
          content="Web developer portfolio, full-stack, only 1 year of experience."
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            site_title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content='{site_title}' />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <header className={header_module.header}>
        <nav className={header_module.nav}>
          <Link href="/" ><a aria-label="Click to return to home page"><img className={header_module.logo} src="/images/moi.png" alt="Profil web developer" /></a></Link>
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
            <li className="m-16">
              <Link href="projects" ><a className={header_module.link} aria-label="Lien vers la page mes projets">Mes projets</a></Link>
            </li>
            <li className="m-16">
              <Contact link />
            </li>
          </ul>
        </div>
        <div className="p-6">
          <ul className="">
            <li className="m-12">
             <a href="https://twitter.com/Anonymze" target="_blank" aria-label="Lien sortant vers mon Twitter"><img className="hover:opacity-75" style={ shadow_images } src="/images/socials/twitter.png" aria-label="Logo twitter" /></a>
            </li>
            <li className="m-12">
             <a href="https://www.facebook.com/yann.metier/" target="_blank" aria-label="Lien sortant vers mon facebook"><img className="hover:opacity-75" style={ shadow_images } style={ shadow_images } src="/images/socials/facebook.png" aria-label="Logo facebook" /></a>
            </li>
            <li className="m-12">
              <p className={header_module.link}>@discord: Ano#9999</p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
