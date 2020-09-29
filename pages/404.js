import style_404 from '../styles/layout/404.module.css';
import Link from 'next/link';

// pages/404.js
export default function Custom404() {
    return (
        <>
            <h1 className={style_404.title}>404 | This page could not be found</h1>
            <Link href="/"><a className={style_404.back_home} aria-label="Link to the home page">Home page</a></Link>
        </>
    )
}
