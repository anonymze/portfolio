import button_module from '../../styles/utils/button.module.css';

export default function Button({children, color, width}) {
    const width_button = (width) ? "100%" : "auto";
    return(
        <button type="button" aria-label="Bouton de validation" className={button_module.button} style={{width: `${width_button}`, backgroundColor: `var(--button-${color})`, boxShadow: `0 4px 14px 0 var(--button-${color})`}}>{children}</button>
    )
}