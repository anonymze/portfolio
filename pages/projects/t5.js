import Layout from "../../components/Layout";
import Head from "next/head";
import ButtonCard from '../../components/utils/ButtonCard';
import { useEffect } from "react";

export default function TFive() {
    useEffect(() => {
        document.body.scrollIntoView();
    }, [])
    return (
        <Layout link="card1">
            <Head>
                <title>Portfolio | Asso T5</title>
            </Head>
            <article >
                <section className="border-solid border-gray-300 border-b-2">
                    <h2 className="font-bold text-4xl md:m-16 my-8">Concept</h2>
                    <p className="md:m-16 my-8 mx-4 md:text-justify">
                        Ce site web sera l’outil principal de <strong>communication</strong> concernant les différentes <strong>équipes au sein de T5</strong>, nous mettrons régulièrement à jour les dernières aventures de chacune des équipes et des joueurs. <strong>Ce site vitrine vous tiendra à jour</strong> sur les tournois à venir, les gros évènements, ainsi que le profil des joueurs.<br/>

                        Nous sommes actuellement basés à Toulouse. Nos ambitions sont avant tout d’établir une association reconnue et qui saura faire profiter les joueurs en devenir.<br/> Notre objectif principal est d’apporter une transition aux jeunes compétiteurs entre le <strong>milieu amateur et compétiti</strong>f.
                 </p>
                </section>
                <section>
                    <h2 className="font-bold text-4xl md:m-16 my-8">Techniques</h2>
                    <p className="md:m-16 my-8 mx-4 md:text-justify">
                        La partie UI / maquettage a été désignée par mon ami <strong>Bastien Langlais</strong>, voici son portfolio <a className="underline" target="_blank" rel="external" href="https://bastien-marketing-web.fr/">https://bastien-marketing-web.fr/</a> si son profil vous intéresse.<br/><br/>

                        Pour cette app web j'ai voulu peaufiner mes connaissances sur <strong>NextJS</strong> combiné à <strong>Strapi pour le Back Office</strong>. Nextjs récupère les équipes et les joueurs depuis cet API/HeadlessCMS.
                    </p>
                </section>
                <div className="md:w-1/3 my-0 mx-auto md:mb-0 mb-24 md:mt-32">
                <ButtonCard colored project="Asso T5" see_project="https://asso-gaming-t5-anonymze.vercel.app/">Voir le site</ButtonCard>
                </div>
            </article>
        </Layout>
    )
}