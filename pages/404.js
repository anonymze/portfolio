import style_404 from "../styles/layout/404.module.css";
import Link_button from "../components/utils/Link_button";

// pages/404.js
export default function Custom404() {
  return (
    <>
      <h1 className={style_404.title}>404 | This page could not be found</h1>
      <Link_button error>Accueil</Link_button>
    </>
  );
}
