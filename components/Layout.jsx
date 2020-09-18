import styles from './layout.module.css';
import util_styles from '../styles/utils.module.css';
import Link from 'next/link';
import Head from 'next/head';

const name = 'Yann'
export const site_title = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    console.log(home)
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>First post</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            site_title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={site_title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>    
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${util_styles.borderCircle}`}
              alt={name}
            />
            <h1 className={util_styles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${util_styles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={util_styles.headingLg}>
              <Link href="/">
                <a className={util_styles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
