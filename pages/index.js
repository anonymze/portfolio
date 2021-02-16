import Layout from "../components/Layout";
import home_module from "../styles/pages/home.module.css";
import { motion } from "framer-motion";
import Contact from "../components/Contact";

const variants = {
  hide: {
    x: -1500,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export default function Home() {
  return (
    <Layout home>
      <motion.div
        variants={variants}
        initial="hide"
        animate="show"
        transition={{ ease: "anticipate", duration: "0.8" }}
        className={home_module.presentation}
      >
        <div className={home_module.presentation_left}>
          <p className={home_module.left_title}>Bonjour, je suis Yann,</p>
          <p className={home_module.left_text}>
            un développeur web/mobile full stack
          </p>
          <div>
            <Contact />
          </div>
        </div>
        <div className={home_module.presentation_right}>
          <p className={home_module.right_text}>
            Je suis un développeur basé à Toulouse. J'ai travaillé pour l'agence{" "}
            <span className={home_module.langages}>Inconito</span> en tant
            qu'alternant pendant 1 année et compte deux ans d'expérience dans le
            digital.
            <br />
            J'ai une expérience junior en <span className={home_module.langages}>HTML</span>, <span className={home_module.langages}>JS</span> et <span className={home_module.langages}>CSS</span>, et je me familiarise avec les frameworks <span className={home_module.langages}>React</span>, <span className={home_module.langages}>NextJs</span>,  <span className={home_module.langages}>Laravel</span>, <span className={home_module.langages}>Ionic</span>, <span className={home_module.langages}>Drupal</span>.
          </p>
          <p className={home_module.right_text}>
            Mon objectif est d'accumuler de l'expérience{" "}
            <span className={home_module.langages}>full-stack</span> pour gagner
            en polyvalence et en autonomie.
          </p>
          <p className={home_module.right_text}>
            Je fais actuellement beaucoup d'intégration mais recherche à
            approfondir mes compétences en back.
          </p>
        </div>
      </motion.div>
      <article className="border-t-2 border-solid border-gray-300 border-b-2">
        <section className="mt-16 mx-16 pb-48 ">
          <h2 className="font-bold text-4xl mb-12">Projets en cours</h2>

          <motion.div
            variants={variants}
            initial="hide"
            animate="show"
            transition={{ ease: "anticipate", duration: "0.8" }}
            className="flex flex-wrap justify-center w-100 "
          >
            <a
              className="card flex m-10 w-2/5 bg-purple-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
              style={{
                minWidth: "730px",
                height: "450px",
                boxShadow: "0 4px 14px 0 var(--button-purple)",
              }}
              target="_blank"
              href="https://asso-gaming-t5-14h18eqr5.vercel.app/"

              alt="Lien sortant vers le site T5"
            >
              <div className="w-1/2 p-12 m-1 mid-block-1">
                <p className="text-xl text-white">2020</p>
                <h3
                  className="text-5xl font-bold text-white mt-2 mb-10"
                  style={{ lineHeight: "3rem" }}
                >
                  Association gaming T5
                </h3>
                <p className="text-xl text-white leading-8">
                  Full-stack développement
                  <br />
                  Application web
                </p>
                <div className="absolute" style={{ bottom: "4rem" }}>
                  <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/nextjs.png"
                    alt="Logo Next"
                    title="Nextjs"
                  />
                  <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/strapi.png"
                    alt="Logo Strapi"
                    title="Strapi"
                  />
                </div>
              </div>
              <div className="w-1/2 py-8 mid-block-2">
                <img
                  className="block w-full h-full rounded-l-md object-cover object-left"
                  alt=""
                  src="/images/images_card/t5.png"
                />
              </div>
            </a>

            <div
              className="card flex m-10 w-2/5 bg-indigo-900 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
              style={{
                minWidth: "730px",
                height: "450px",
                boxShadow: "0 4px 14px 0 var(--button-indigo)",
              }}
            >
              <div className="w-1/2 p-12 m-1 mid-block-1">
                <p className="text-xl text-white">2020</p>
                <h3
                  className="text-5xl font-bold text-white mt-2 mb-10"
                  style={{ lineHeight: "3rem" }}
                >
                  Smash Lab
                </h3>
                <p className="text-xl text-white leading-8">
                  Full-stack développement
                  <br />
                  Application mobile
                </p>
                <div className="absolute" style={{ bottom: "4rem" }}>
                  <img
                    className="inline-block w-12 mx-2"
                    src="/images/icones_langage/ionic.png"
                    alt="Logo Ionic"
                    title="Ionic"
                  />
                  <img
                    className="inline-block w-12 mx-2"
                    src="/images/icones_langage/typescript.png"
                    alt="Logo Typescript"
                    title="Typescript"
                  />
                  <img
                    className="inline-block w-12 mx-2"
                    src="/images/icones_langage/laravel.png"
                    alt="Logo Laravel"
                    title="Laravel"
                  />
                </div>
              </div>
              <div className="w-1/2 py-8 mid-block-2">
                <img
                  className="block w-full h-full rounded-l-md object-cover object-left"
                  alt=""
                  src="/images/images_card/smash_lab.png"
                />
              </div>
            </div>

            <a
              className="card flex m-10 w-2/5 bg-blue-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
              style={{
                minWidth: "730px",
                height: "450px",
                boxShadow: "0 4px 14px 0 var(--button-blue)",
              }}
              target="_blank"
              href="https://zipfinder-194a3.web.app/"

              alt="Lien sortant vers le site T5"
            >
              <div className="w-1/2 p-12 m-1 mid-block-1">
                <p className="text-xl text-white">2021</p>
                <h3
                  className="text-5xl font-bold text-white mt-2 mb-10"
                  style={{ lineHeight: "3rem" }}
                >
                  Chercheur de zip code
                </h3>
                <p className="text-xl text-white leading-8">
                  Front-end développement
                  <br />
                  Application web/mobile
                </p>
                <div className="absolute" style={{ bottom: "4rem" }}>
                <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/vuejs.png"
                    alt="Logo Vuejs"
                    title="Vuejs"
                  />
                  <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/ionic.png"
                    alt="Logo ionic"
                    title="ionic"
                  />
                  <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/pwa.png"
                    alt="Logo PWA"
                    title="PWA"
                  />
                </div>
              </div>
              <div className="w-1/2 py-8 mid-block-2">
                <img
                  className="block w-full h-full rounded-l-md object-cover object-left"
                  alt=""
                  src="/images/images_card/zip.png"
                />
              </div>
            </a>

            <a
              className="card flex m-10 w-2/5 bg-yellow-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
              style={{
                minWidth: "730px",
                height: "450px",
                boxShadow: "0 4px 14px 0 var(--button-yellow)",
              }}
              target="_blank"
              href="http://amplifyapp-20210211012931-hostingbucket-dev.s3-website-eu-west-1.amazonaws.com/"

              alt="Lien sortant vers le site T5"
            >
              <div className="w-1/2 p-12 m-1 mid-block-1">
                <p className="text-xl text-white">2021</p>
                <h3
                  className="text-5xl font-bold text-white mt-2 mb-10"
                  style={{ lineHeight: "3rem" }}
                >
                  Propositions d'idées
                </h3>
                <p className="text-xl text-white leading-8">
                  Full-stack développement
                  <br />
                  Application web
                </p>
                <div className="absolute" style={{ bottom: "4rem" }}>
                <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/vuejs.png"
                    alt="Logo Vuejs"
                    title="Vuejs"
                  />
                  <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/amplify.png"
                    alt="Logo amplify"
                    title="amplify"
                  />
                </div>
              </div>
              <div className="w-1/2 py-8 mid-block-2">
                <img
                  className="block w-full h-full rounded-l-md object-cover object-left"
                  alt=""
                  src="/images/images_card/idees.png"
                />
              </div>
            </a>

          </motion.div>
        </section>
      </article>
      <article>
        <section className="m-16">
          <h2 className="font-bold text-4xl mb-24">
            Expériences professionnelles
          </h2>
          <motion.div
            variants={variants}
            initial="hide"
            animate="show"
            transition={{ ease: "anticipate", duration: "0.8" }}
            className="work my-12 flex justify-center items-center"
          >
            <div className="mx-16">
              <img
                style={{ minWidth: "6rem" }}
                className="block w-24"
                src="/images/compagnies/inconito.png"
                aria-label="Logo de web6"
              />
            </div>
            <div className="mx-16">
              <ul className="list-none">
                <li
                  className="li w-auto text-white font-semibold text-xl h-8"
                  style={{
                    margin: "0.8rem 0",
                    width: "600px",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "#014d6f",
                      lineHeight: "2rem",
                      paddingRight: "1.1rem",
                      paddingBottom: "0.3rem",
                    }}
                    className="inline-block rounded-md pl-4"
                  >
                    2019 / 2020 (1 an)
                  </p>
                </li>
                <li
                  className="li w-auto text-white font-semibold text-xl h-8"
                  style={{ margin: "0.8rem 0", width: "600px" }}
                >
                  <p
                    style={{
                      backgroundColor: "#014d6f",
                      lineHeight: "2rem",
                      paddingRight: "1.1rem",
                      paddingBottom: "0.3rem",
                    }}
                    className="inline-block rounded-md pl-4"
                  >
                    Front-end
                  </p>
                </li>
                <li
                  className="li w-auto text-white font-semibold text-xl h-8"
                  style={{ margin: "0.8rem 0", width: "600px" }}
                >
                  <p
                    style={{
                      backgroundColor: "#014d6f",
                      lineHeight: "2rem",
                      paddingRight: "1.1rem",
                      paddingBottom: "0.3rem",
                    }}
                    className="inline-block rounded-md pl-4"
                  >
                    Intégrations de maquette et newsletters (mailchamp)
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={variants}
            initial="hide"
            animate="show"
            transition={{ ease: "anticipate", duration: "0.8" }}
            className="work my-12 flex justify-center items-center"
          >
            <div className="mx-16">
              <img
                style={{ minWidth: "6rem" }}
                className="block w-24"
                src="/images/compagnies/web6.png"
                aria-label="Logo de web6"
              />
            </div>
            <div className="mx-16">
              <ul className="list-none">
                <li
                  className="li w-auto text-white font-semibold text-xl h-8"
                  style={{ margin: "0.8rem 0", width: "600px" }}
                >
                  <p
                    style={{
                      backgroundColor: "#00ccff",
                      lineHeight: "2rem",
                      paddingRight: "1.1rem",
                      paddingBottom: "0.3rem",
                    }}
                    className="inline-block rounded-md pl-4"
                  >
                    2018 / 2019 (4 mois)
                  </p>
                </li>
                <li
                  className="li w-auto text-white font-semibold text-xl h-8"
                  style={{ margin: "0.8rem 0", width: "600px" }}
                >
                  <p
                    style={{
                      backgroundColor: "#00ccff",
                      lineHeight: "2rem",
                      paddingRight: "1.1rem",
                      paddingBottom: "0.3rem",
                    }}
                    className="inline-block rounded-md pl-4"
                  >
                    Full-stack
                  </p>
                </li>
                <li
                  className="li w-auto text-white font-semibold text-xl h-8"
                  style={{ margin: "0.8rem 0", width: "600px" }}
                >
                  <p
                    style={{
                      backgroundColor: "#00ccff",
                      lineHeight: "2rem",
                      paddingRight: "1.1rem",
                      paddingBottom: "0.3rem",
                    }}
                    className="inline-block rounded-md pl-4"
                  >
                    Création d'une application web de centralisation de stocks
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>
      </article>
    </Layout>
  );
}
