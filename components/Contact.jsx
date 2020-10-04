import React from 'react';
import Modal from 'react-modal';
import Button from './utils/Button';
import header_module from '../styles/layout/header.module.css';

const customStyles = {
    content: {
        top: '-100px',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '180px',
        textAlign: 'center',
        borderRadius: '5px',
        border: "1px solid #d2d1d1",
        transition: "0.3s"

    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal')

export default function Contact({ link }) {

    const [copySuccess, setCopySuccess] = React.useState('');

    let subtitle;
    const display = (link) ? "inline-block" : "block";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = 'var(--button-purple)';
        subtitle.style.fontWeight = "600";
        subtitle.style.fontSize = "26px";
        subtitle.style.textAlign = "center";
        subtitle.style.height = "80px";
        subtitle.style.lineHeight = "60px";
        subtitle.style.display = "inline-block";
        subtitle.style.marginRight = "1rem";
        subtitle.style.cursor = "pointer";
        customStyles.content.top = "50%"
    }

    function closeModal() {
        setIsOpen(false);
        setCopySuccess('');
        customStyles.content.top = "-200px"
    }

    const copyToClipboard = () => {
        const copied = document.getElementById('copied');
        copied.style.visibility = "visible";
        copied.style.opacity = "1";
        copied.style.top = "1rem";
        const mail = document.getElementById('mail');
        const el = document.createElement('textarea');
        el.value = mail.innerHTML;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopySuccess('Copied !');
    };

    return (
        <>
            <div id="modal" style={{ display: 'none' }}></div>
            <div style={{ display: `${display}` }} onClick={openModal}>
                {
                    (link)
                        ? <button className={header_module.link} style={{ display: "inline-block", outline: "none" }}>Me contacter</ button>
                        : <Button color="blue">Dites moi coucou !</ Button>
                }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Modal de contact"
            >
                <p id="mail" onClick={copyToClipboard} ref={_subtitle => (subtitle = _subtitle)}>metier.yann@gmail.com</p>
                <svg onClick={copyToClipboard} style={{ width: "30px", display: "inline-block", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span id="copied" style={{ color: "#805ad5", position: "absolute", top: "2rem", right: "4rem", opacity: "0", visibility: "hidden", transition: "0.2s" }}>{(copySuccess) ? copySuccess : ''}</span>
                <div style={{ width: "100%" }} onClick={closeModal}>
                    <Button color="blue" width>D'accord</Button>
                </div>
            </Modal>
        </>
    )
}