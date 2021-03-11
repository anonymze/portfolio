import Head from "next/head";
import Layout from "../../components/Layout";
import ButtonCard from '../../components/utils/ButtonCard'
export default function Smash() {
    return (
        <Layout>
            <Head>
                <title>Portfolio | Smash Lab</title>
            </Head>

            <article >
            <section>
                <h2 className="md:m-16 my-8 mx-4 text-center font-semibold text-3xl">
                      Sortié prévue le 21/03/2021 !
                    </h2>
                </section>
                <section className="border-solid border-gray-300 border-b-2">                    
                    <h2 class="font-bold text-4xl md:m-16 my-8">Concept</h2>
                    <p className="md:m-16 my-8 mx-4 md:text-justify">
                        <strong>« Super Smash Bros. Ultimate »</strong> est un jeu de combat composé de beaucoup de personnages jouables. C’est un jeu Nintendo qui s’est imposé dans le monde de la compétition et qui demande énormément de <strong>stratégies et de techniques</strong>. Le nombre de joueurs grandit d’années en années et le manque d’outils pour aider les joueurs dans leur progression se fait ressentir.

                        J’ai décidé de créer une application mobile pour aider ces joueurs.<br /> Cette application va <strong>compenser les lacunes du jeu</strong>, c’est-à-dire le manque de documentation. Je souhaite apporter un <strong>mémo / bloc-note personnalisable</strong> pour écrire des données sur les personnages jouables du jeu (comment jouer contre tel personnage par exemple, quelles sont ses forces/faiblesses etc…).<br />

                        L’objectif majeur du projet est de permettre à un utilisateur d'ouvrir cette application, d’utiliser les informations qu'il y a inscrites et de s’en servir pour remporter ses matchs prochains matchs. Les cibles sont les <strong>joueurs compétitifs</strong>, même si un joueur casual peut très bien l'utiliser aussi.
                 </p>
                </section>
                <section>
                    <h2 class="font-bold text-4xl md:m-16 my-8">Techniques</h2>
                    <p className="md:m-16 my-8 mx-4 md:text-justify">
                        La partie UX fût pour moi la plus importante du projet, c'est pourquoi j'ai été au contact de la communauté Smash Toulousaine avant de me lancer dans l'aventure. Très tôt l'idée d'une application mobile pour aider les joueurs est arrivée. En tournoi le téléphone est un outil que tout le monde possède sur soi pour analyser les brackets (les futurs matchs), ainsi il était naturel de leur proposer une app qui est sur ce même appareil.
                        <br />
                        <br />
                        Concernant le framework je me suis penché sur <strong>Ionic</strong> au lieu de React Native tout simplement parce que je n'avais jamais travaillé sur du "Angular", je souhaitais découvrir cette partie du monde des <strong>frameworks JS</strong>.
                        <br />
                        <br />
                        Le front a été écrit en <strong>Sass</strong>, la logique de l'app en <strong>TypeScript</strong> (le main language de Ionic) et le back avec <strong>NodeJS</strong> (pour gérer les inscriptions et le partage de bloc-notes) hébergé sur un serveur cloud Heroku.
                    </p>
                </section>               
            </article>
        </Layout>
    )
}