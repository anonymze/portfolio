import Head from "next/head";
import Layout from "../../components/Layout";
import ButtonCard from '../../components/utils/ButtonCard';
import { useEffect } from "react";


export default function ZoomOutCards() {
  useEffect(() => {
    document.body.scrollIntoView();
}, [])
  return (
    <Layout link="card5">
      <Head>
        <title>Portfolio | FadeAway cartes</title>
      </Head>
      <article >
        <section className="border-solid border-gray-300 border-b-2">
          <h2 className="font-bold text-4xl md:m-16 my-8">Concept</h2>
          <p className="md:m-16 my-8 mx-4 md:text-justify">
            C'est un concept de fadeaway d'élements qui a été créé par un profil redditeur du nom de <strong>Mikaelainalem</strong>, j'ai décidé d'y apporter ma patte et de rendre l'interface plus responsive car les données étaient écrites en brut et ne fonctionnaient pas sur une autre taille d'écran.
                 </p>
        </section>
        <section>
          <h2 className="font-bold text-4xl md:m-16 my-8">Techniques</h2>
          <p className="md:m-16 my-8 mx-4 md:text-justify">
            La modification ne concerne uniquement que le <strong>CSS</strong> et le <strong>JS</strong>.<br/>
            Je pourrai encore améliorer la partie JS en utilisant la fonction native <code className="italic font-semibold">IntersectionObserver()</code> au lieu de <code className="italic font-semibold">boundingClientRect()</code> qui est gourmande en performance.
                    </p>
        </section>
        <div className="md:w-1/3 my-0 mx-auto md:mb-0 mb-24 md:mt-32">
          <ButtonCard colored project="FadeAway cartes" see_project="https://codepen.io/Anonymze/pen/eYBjVxR">Voir le site</ButtonCard>
        </div>
      </article>
    </Layout>
  )
}