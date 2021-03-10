import Layout from "../components/Layout";
import home_module from "../styles/pages/home.module.css";
import ButtonCard from '../components/utils/ButtonCard'
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { useEffect } from "react";

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
  useEffect(() => {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mouseenter', function (e) {
        e.target.querySelector('.buttons-card').classList.remove('hide');
      })
      card.addEventListener('mouseleave', function (e) {
        e.target.querySelector('.buttons-card').classList.add('hide');
      })
    })
  }, [])


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
            <span className={home_module.langages}>Inconito</span> pendant 1 année.<br />
            <br />
            Je maitrîse les 3 langages principaux du web dev <span className={home_module.langages}>(HTML</span>, <span className={home_module.langages}>CSS,</span> <span className={home_module.langages}>JS)</span> et je me familiarise avec les frameworks JS comme <span className={home_module.langages}>React</span>, <span className={home_module.langages}>NextJs</span>,  <span className={home_module.langages}>Vuejs</span>, <span className={home_module.langages}>Ionic</span> et <span className={home_module.langages}>React native</span>.<br />Je reste tout de même ouvert à d'autres languages/frameworks puisque j'ai déjà réalisé des applications sous Laravel ou encore Drupal et Wordpress pour les CMS.
          </p>
          <p className={home_module.right_text}>
            Mon objectif est d'accumuler de l'expérience{" "}
            <span className={home_module.langages}>full-stack</span> pour gagner
            en polyvalence et en autonomie, c'est pourquoi le front comme le back m'attirent tout autant.
          </p>
        </div>
      </motion.div>
      <article className="border-t-2 border-solid border-gray-300 border-b-2">
        <section className="mt-16 mx-16 pb-48 ">
          <h2 className="font-bold text-4xl mb-12">Projets terminés</h2>

          <motion.div
            variants={variants}
            initial="hide"
            animate="show"
            transition={{ ease: "anticipate", duration: "0.8" }}
            className="flex flex-wrap justify-center w-100"
          >
            <div
              className="card flex m-10 w-2/5 bg-purple-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
              style={{
                minWidth: "730px",
                height: "450px",
                boxShadow: "0 4px 14px 0 var(--button-purple)",
              }}

            >
              <div className="buttons-card absolute hide">
                <ButtonCard project="T5" see_project="https://asso-gaming-t5.vercel.app/">Voir app</ButtonCard>
                <ButtonCard project="T5" details_project="/projects/t5">Voir détails</ButtonCard>
              </div>
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
            </div>

            <div className="card flex m-10 w-2/5 bg-indigo-900 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105" style={{ minWidth: "730px", height: "450px", boxShadow: "0 4px 14px 0 var(--button-indigo)" }}>
              <div className="buttons-card absolute hide">
                <ButtonCard project="Smash Lab" see_project="#">Voir app</ButtonCard>
                <ButtonCard project="Smash Lab" details_project="/projects/smash">Voir détails</ButtonCard>
              </div>
              <div className="w-1/2 p-12 m-1 mid-block-1">
                <p className="text-xl text-white">2020</p>
                <h3 className="text-5xl font-bold text-white mt-2 mb-10" style={{ lineHeight: "3rem" }}>Smash Lab</h3>
                <p className="text-xl text-white leading-8">Full-stack développement<br />Application mobile</p>
                <div className="absolute" style={{ bottom: '4rem' }}>
                  <img className="inline-block w-12 mx-2" src="/images/icones_langage/ionic.png" alt="Logo Ionic" title="Ionic" />
                  <img className="inline-block w-12 mx-2" src="/images/icones_langage/typescript.png" alt="Logo Typescript" title="Typescript" />
                  <img className="inline-block w-12 mx-2" src="/images/icones_langage/laravel.png" alt="Logo Laravel" title="Laravel" />
                </div>
              </div>
              <div className="w-1/2 py-8 mid-block-2">
                <img className="block w-full h-full rounded-l-md object-cover object-left" alt="" src="/images/images_card/smash_lab.png" />
              </div>
            </div>

            <div
              className="card flex m-10 w-2/5 bg-blue-500 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
              style={{
                minWidth: "730px",
                height: "450px",
                boxShadow: "0 4px 14px 0 var(--button-blue)",
              }}
              href="https://zipfinder-194a3.web.app/"

              alt="Lien sortant vers zip code"
            >
               <div className="buttons-card absolute hide">
                <ButtonCard project="Zip code" see_project="https://zipfinder-194a3.web.app/">Voir app</ButtonCard>
                <ButtonCard project="Zip code" details_project="/projects/zip">Voir détails</ButtonCard>
              </div>
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
            </div>

            <div
              className="card flex m-10 w-2/5 bg-yellow-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
              style={{
                minWidth: "730px",
                height: "450px",
                boxShadow: "0 4px 14px 0 var(--button-yellow)",
              }}
              href="http://amplifyapp-20210211012931-hostingbucket-dev.s3-website-eu-west-1.amazonaws.com/"

              alt="Lien sortant vers le site boite à idées"
            >
             <div className="buttons-card absolute hide">
                <ButtonCard project="Boite à idées" see_project="http://amplifyapp-20210211012931-hostingbucket-dev.s3-website-eu-west-1.amazonaws.com/">Voir app</ButtonCard>
                <ButtonCard project="Boite à idées" details_project="/projects/idea">Voir détails</ButtonCard>
              </div>
              <div className="w-1/2 p-12 m-1 mid-block-1">
                <p className="text-xl text-white">2021</p>
                <h3
                  className="text-5xl font-bold text-white mt-2 mb-10"
                  style={{ lineHeight: "3rem" }}
                >
                  Boîte à idées
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
            </div>

            <div
              className="card flex m-10 w-2/5 bg-green-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105"
              style={{
                minWidth: "730px",
                height: "450px",
                boxShadow: "0 4px 14px 0 var(--button-green)",
              }}
              href="http://amplifyapp-20210211012931-hostingbucket-dev.s3-website-eu-west-1.amazonaws.com/"

              alt="Lien sortant vers le site boite à idées"
            >
             <div className="buttons-card absolute hide">
                <ButtonCard project="Boite à idées" see_project="https://codepen.io/Anonymze/pen/eYBjVxR">Voir app</ButtonCard>
                <ButtonCard project="Fadeaway cartes" details_project="/projects/zoom-out-cards">Voir détails</ButtonCard>
              </div>
              <div className="w-1/2 p-12 m-1 mid-block-1">
                <p className="text-xl text-white">2021</p>
                <h3
                  className="text-5xl font-bold text-white mt-2 mb-10"
                  style={{ lineHeight: "3rem" }}
                >
                  FadeAway cartes
                </h3>
                <p className="text-xl text-white leading-8">
                  Front-end développement
                  <br />
                  Application web/mobile
                </p>
                <div className="absolute" style={{ bottom: "4rem" }}>
                  <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/html.png"
                    alt="Logo HTML5"
                    title="HTML"
                  />
                  <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/css.png"
                    alt="Logo css"
                    title="CSS"
                  />
                  <img
                    className="inline-block w-12 mx-2 object-cover object-left"
                    src="/images/icones_langage/js.png"
                    alt="Javascript"
                    title="Logo javascript"
                  />
                </div>
              </div>
              <div className="w-1/2 py-8 mid-block-2">
                <img
                  className="block w-full h-full rounded-l-md object-cover object-left"
                  alt=""
                  src="/images/images_card/cartes.png"
                />
              </div>
            </div>

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
                    Full-stack
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
                    Intégrations de maquette et de newsletter (Mailchimp)
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
