import Link from 'next/link';

export default function Link({children, color}) {
    return(
        <Link href="/" aria-label=""><button type="button">{children}</button></Link>
    )
}