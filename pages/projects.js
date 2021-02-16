import Layout from "../components/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hide: {
    x: -1200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Portfolio | Mes projets</title>
      </Head>
      <article>
        <section>
          <h2 className="title-projects m-12 font-bold text-4xl mb-12">
            Projets terminés
          </h2>
          <motion.div
            variants={variants}
            initial="hide"
            animate="show"
            transition={{ ease: "anticipate", duration: "0.8" }}
            className="flex flex-wrap justify-center w-100 "
          >
            <a
              href="https://github.com/anonymze/centralisation_laravel"
              target="_blank"
              aria-label="Lien vers le github du projet centralisation de stock"
              className="card flex m-10 w-2/5 bg-green-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
              style={{
                minWidth: "730px",
                height: "450px",
                boxShadow: "0 4px 14px 0 var(--button-green)",
              }}
            >
              <div className="w-1/2 p-12 m-1 mid-block-1">
                <p className="text-xl text-white">2020</p>
                <h3
                  className="text-5xl font-bold text-white mt-2 mb-10"
                  style={{ lineHeight: "3rem" }}
                >
                  Centralisation de stock
                </h3>
                <p className="text-xl text-white leading-8">
                  Full-stack développement
                  <br />
                  Application web
                </p>
                <div className="absolute" style={{ bottom: "4rem" }}>
                  <img
                    className="inline-block w-12 mx-2"
                    src="/images/icones_langage/laravel.png"
                    alt="Logo Ionic"
                    title="Ionic"
                  />
                  <img
                    className="inline-block w-12 mx-2"
                    src="/images/icones_langage/prestashop.png"
                    alt="Logo Typescript"
                    title="Typescript"
                  />
                </div>
              </div>
              <div className="w-1/2 py-8 mid-block-2">
                <img
                  className="block w-full h-full rounded-l-md object-cover object-left"
                  alt=""
                  src="/images/images_card/centralisation.png"
                />
              </div>
            </a>
            <div
              className="card flex m-10 w-2/5 bg-pink-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
              style={{
                minWidth: "730px",
                height: "450px",
                boxShadow: "0 4px 14px 0 var(--button-magenta)",
              }}
            >
              <div className="w-1/2 p-12 m-1 mid-block-1">
                <p className="text-xl text-white">2020</p>
                <h3
                  className="text-5xl font-bold text-white mt-2 mb-10"
                  style={{ lineHeight: "3rem" }}
                >
                  Portfolio
                </h3>
                <p className="text-xl text-white leading-8">
                  Front-end développement
                  <br />
                  Application web
                </p>
                <div className="absolute" style={{ bottom: "4rem" }}>                
                  <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/react.png"
                    alt="Logo React"
                    title="React"
                  />
                  <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/tailwind.png"
                    alt="Logo Tailwindcss"
                    title="Tailwindcss"
                  />
                </div>
              </div>
              <div className="w-1/2 py-8 mid-block-2">
                <img
                  className="block w-full h-full rounded-l-md object-cover object-left"
                  alt=""
                  src="/images/images_card/portfolio.png"
                />
              </div>
            </div>
          </motion.div>
        </section>
      </article>
    </Layout>
  );
}
