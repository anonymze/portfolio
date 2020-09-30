import Link from 'next/link';
import Head from 'next/head';
import header_module from '../styles/layout/header.module.css';

export default function Layout({ children, home }) {
  // console.log(home)
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
          <Link href="/" ><a aria-label="Click to return to home page"><img className={header_module.logo} src="/images/logo.png" alt="Logo web developer" /></a></Link>
          <div className={header_module.links}>
            <Link href="/"><a className={header_module.link} aria-label="Lien vers la page mes projets">My Projects</a></Link>
            <Link href="/"><a className={header_module.link} aria-label="Ouverture de la boîte mail avec mon adresse">Contact me</a></Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
      <footer className="border-t-2 border-solid border-gray-300 p-6 text-gray-700">
        <div className="p-6">
          <ul className="flex justify-center">
            <li className="flex-1 text-center">
              <Link href="/" ><a aria-label="">My Projects</a></Link>
            </li>
            <li className="flex-1 text-center">
              <Link href="/" ><a aria-label="">Contact Me</a></Link>
            </li>
          </ul>
        </div>
        <div className="p-8">
          <ul className="flex justify-start">
            <li className="flex-1 text-center">
              <Link href="/"><a aria-label="" className="flex-1 text-center">Twitter</a></Link>
            </li>
            <li className="flex-1 text-center">
              <Link href="/"><a aria-label="" className="flex-1 text-center">Facebook</a></Link>
            </li>
            <li className="flex-1 text-center">
              <Link href="/" ><a aria-label="">Made by Yann | Ano</a></Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
