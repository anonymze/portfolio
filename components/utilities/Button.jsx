import Link from 'next/link';

export default function Button({children, color}) {
    return(
        <Link href="/"><a aria-label="Lien vers tel page">{children}</a></Link>
    )
}