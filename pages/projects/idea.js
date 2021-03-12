import Head from "next/head";
import Layout from "../../components/Layout";
import ButtonCard from '../../components/utils/ButtonCard';
import { useEffect } from "react";


export default function Idea() {
    useEffect(() => {
        document.body.scrollIntoView();
    }, [])
    return (
        <Layout link="card4">
            <Head>
                <title>Portfolio | Boîte à idée</title>
            </Head>
            <article >
                <section className="border-solid border-gray-300 border-b-2">
                    <h2 className="font-bold text-4xl md:m-16 my-8">Concept</h2>
                    <p className="md:m-16 my-8 mx-4 md:text-justify">
                       Le concept est simple, c'est un site où l'on écrit des idées d'applications que je pourrai développer.<br/> J'ai partagé ce site avec amis, quand ils ont une idée, ils l'écrivent et on <strong>brainstorm</strong> là-dessus.
                 </p>
                </section>
                <section>
                    <h2 className="font-bold text-4xl md:m-16 my-8">Techniques</h2>
                    <p className="md:m-16 my-8 mx-4 md:text-justify">
                      Je souhaitais m'exercer sur un serveur <strong>Cloud Amazon</strong>, je me suis servi de <strong>Amplify</strong> pour créer cet interface de connexion et le partage des idées. Le partage des idées se fait en live sans que vous ayez besoin de recharger la page, j'utilise <strong>Graphql Subscription</strong> (même fonctionnement qu'un protocole de socket).<br />
                      Le front est avec <strong>VueJS</strong>.
                    </p>
                </section>
                <div className="md:w-1/3 my-0 mx-auto md:mb-0 mb-24 md:mt-32">
                <ButtonCard colored project="Boite à idée" see_project="http://amplifyapp-20210211012931-hostingbucket-dev.s3-website-eu-west-1.amazonaws.com/">Voir le site</ButtonCard>
                </div>
            </article>
        </Layout>
    )
}
