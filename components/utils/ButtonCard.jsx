import button_module from '../../styles/utils/button.module.css';
import link_module from '../../styles/utils/link.module.css';
import Link from 'next/link';

export default function ButtonCard({ children, project, see_project, details_project }) {

    if (details_project) {
        return (
            <Link href={details_project}>
                <a className={`${button_module.button} ${link_module.link}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "0 0.8rem", margin: "1rem 0", transform: "scale(0.8)" }}

                    title={`Lien vers les détails du projet ${project}`}
                >
                    {children}
                </a>
            </Link>
        )
    } else {
        return (
            <a href={see_project} className={`${button_module.button} ${link_module.link}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "0 0.8rem", margin: "1rem 0", transform: "scale(0.8)" }} title={`Lien sortant vers le projet ${project}`} rel="external" target="_blank">
                {children}
            </a>
        )
    }
}