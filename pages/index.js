import Layout from "../components/Layout";
import home_module from '../styles/pages/home.module.css';
import Button from '../components/utils/Button';
import Link from 'next/link';
import { motion } from "framer-motion";

const variants = {
  hide: {
    x: -1500,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

export default function Home() {
  return (
    <Layout home>
      <motion.div
        variants={variants}
        initial="hide"
        animate="show"
        transition={{ ease: "anticipate", duration: "0.8" }}
        className={home_module.presentation}>
        <div className={home_module.presentation_left}>
          <p className={home_module.left_title}>Bonjour, je suis Yann,</p>
          <p className={home_module.left_text}>un développeur web/mobile full stack</p>
          <Button color="blue">Dites moi coucou !</Button>
        </div>
        <div className={home_module.presentation_right}>
          <p className={home_module.right_text}>Je suis un développeur basé à Toulouse. Je travail pour la compagnie <span className={home_module.langages}>Inconito</span> en tant qu'alternant, je suis sur ma première année d'experience avec le digital.<br />
          J'ai une expérience junior avec l'<span className={home_module.langages}>HTML</span>, le <span className={home_module.langages}>JS</span> et le <span className={home_module.langages}>CSS</span>, et j'utilise régulièrement les frameworks <span className={home_module.langages}>React</span>, <span className={home_module.langages}>NextJs</span>, <span className={home_module.langages}>Laravel</span>, <span className={home_module.langages}>Ionic</span>, <span className={home_module.langages}>Drupal</span>.
          </p>
          <p className={home_module.right_text}>Je vise à accumuler de l'expérience <span className={home_module.langages}>full-stack</span> pour la polyvalence et l'autonomie.</p>
          <p className={home_module.right_text}>Je fais énormément d'intégration mais je recherche un bagage plus important en back-end.</p>
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
            className="flex flex-wrap justify-center w-100 ">

            <div className="relative flex m-10 w-2/5 bg-purple-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105" style={{ minWidth: "800px", height: "500px", boxShadow: '0 4px 14px 0 var(--button-purple)' }}>
              <div className="w-1/2 p-16">
                <p className="text-xl text-white">2020</p>
                <h3 className="text-5xl font-bold text-white mt-2 mb-16">Association gaming T5</h3>
                <p className="text-xl text-white leading-8">Full-stack développement
                  <br />
                Application web
                </p>
                <div className="absolute" style={{ bottom: "4rem" }}>
                  <img className="inline-block w-12 mx-2" src="/images/icones_langage/wordpress.png" alt="Logo wordpress" title="Wordpress" />
                </div>
              </div>
              <div className="w-1/2 py-8">
                <img className="block h-full rounded-l-md" alt="" src="/images/images_card/t5.png" />
              </div></div>

            <a className="relative flex m-10 w-2/5 bg-blue-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105" style={{ minWidth: "800px", height: "500px", boxShadow: '0 4px 14px 0 var(--button-blue)' }}>
              <div className="w-1/2 p-16">
                <p className="text-xl text-white">2020</p>
                <h3 className="text-5xl font-bold text-white mt-2 mb-16">Smash Lab</h3>
                <p className="text-xl text-white leading-8">Full-stack développement
                  <br />
                Application mobile
                </p>
                <div className="absolute" style={{ bottom: "4rem" }}>
                  <img className="inline-block w-12 mx-2" src="/images/icones_langage/ionic.png" alt="Logo Ionic" title="Ionic" />
                  <img className="inline-block w-12 mx-2" src="/images/icones_langage/typescript.png" alt="Logo Typescript" title="Typescript" />
                  <img className="inline-block w-12 mx-2" src="/images/icones_langage/laravel.png" alt="Logo Laravel" title="Laravel" />
                </div>
              </div>
              <div className="w-1/2 py-8">
                <img className="block w-full h-full rounded-l-md object-contain object-left" alt="" src="/images/images_card/smash_lab.png" />
              </div>
            </a>
          </motion.div>
        </section>
      </article>
      <article>
        <section className="m-16">
          <h2 className="font-bold text-4xl mb-24">Expériences professionnelles</h2>
          <motion.div 
             variants={variants}
             initial="hide"
             animate="show"
             transition={{ ease: "anticipate", duration: "0.8" }}
          className="my-12 flex justify-center items-center">
            <div className="mx-16">
              <img className="block w-24" src="/images/compagnies/inconito.png" aria-label="Logo de web6"/>
            </div>
            <div className="mx-16">
              <ul className="list-none">
                <li className="w-auto text-white font-semibold text-xl h-8" style={{ margin: "0.8rem 0", width: "600px"}}><p style={{ backgroundColor: "#014d6f", lineHeight: "2.5rem", paddingRight: "1.1rem"}} className="inline-block rounded-md pl-4" >2018 / 2019 (4 mois)</p></li>
                <li className="w-auto text-white font-semibold text-xl h-8" style={{ margin: "0.8rem 0", width: "600px"}}><p style={{ backgroundColor: "#014d6f", lineHeight: "2.5rem", paddingRight: "1.1rem"}} className="inline-block rounded-md pl-4">Front-end</p></li>
                <li className="w-auto text-white font-semibold text-xl h-8" style={{ margin: "0.8rem 0", width: "600px"}} ><p style={{ backgroundColor: "#014d6f", lineHeight: "2.5rem", paddingRight: "1.1rem"}} className="inline-block rounded-md pl-4">Intégrations de maquette et newsletters (mailchamp)</p></li>
              </ul>
            </div>
          </motion.div>
          <motion.div
             variants={variants}
             initial="hide"
             animate="show"
             transition={{ ease: "anticipate", duration: "0.8" }}
          className="my-12 flex justify-center items-center">
            <div className="mx-16">
              <img className="block w-24" src="/images/compagnies/web6.png" aria-label="Logo de web6"/>
            </div>
            <div className="mx-16">
              <ul className="list-none">
                <li className="w-auto text-white font-semibold text-xl h-8" style={{ margin: "0.8rem 0", width: "600px"}}><p style={{ backgroundColor: "#00ccff", lineHeight: "2.5rem", paddingRight: "1.1rem"}} className="inline-block rounded-md pl-4" >2018 / 2019 (1 an)</p></li>
                <li className="w-auto text-white font-semibold text-xl h-8" style={{ margin: "0.8rem 0", width: "600px"}}><p style={{ backgroundColor: "#00ccff", lineHeight: "2.5rem", paddingRight: "1.1rem"}} className="inline-block rounded-md pl-4">Full-stack</p></li>
                <li className="w-auto text-white font-semibold text-xl h-8" style={{ margin: "0.8rem 0", width: "600px"}}><p style={{ backgroundColor: "#00ccff", lineHeight: "2.5rem", paddingRight: "1.1rem"}} className="inline-block rounded-md pl-4">Création d'une application web de centralisation de stocks</p></li>
              </ul>
            </div>
          </motion.div>
        </section>
      </article>

    </Layout>
  );
}

