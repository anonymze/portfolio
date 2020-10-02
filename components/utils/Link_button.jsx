import button_module from '../../styles/utils/button.module.css';
import link_module from '../../styles/utils/link.module.css';
import Link from 'next/link';

export default function Link_button({ children }) {
    return (
        <Link href="/">
            <a className={`${button_module.button} ${link_module.link}`} aria-label="Lien vers la page d'accueil">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" width="30px" style={{ display: "inline-block", marginRight: "1rem" }}>
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                {children}
            </a>
        </Link>
    )
}
