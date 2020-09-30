import button_module from '../../styles/utils/link.module.css';

export default function Button({children, color}) {
    return(
        <a type="button" className={button_module.button} style={{backgroundColor: `var(--button-${color})`, boxShadow: `0 4px 14px 0 var(--button-${color})`}}>{children}</a>
    )
}