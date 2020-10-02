import Layout from "../components/Layout";
import Link from 'next/link';
import { motion } from "framer-motion";

const variants = {
  hide: {
    x: -1200,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

export default function Home() {
  return (
    <Layout>
      <article>
        <h2 className="m-16 font-bold text-4xl mb-12">Projets récents</h2>
        <section>
          <div className="flex flex-wrap justify-center w-100">

            <motion.div
              variants={variants}
              initial="hide"
              animate="show"
              transition={{ ease: "anticipate", duration: "0.4" }}
              className="relative flex m-10 w-2/5 bg-pink-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105" style={{ minWidth: "800px", height: "500px", boxShadow: '0 4px 14px 0 var(--button-magenta)' }}>

              <div className="w-1/2 p-16">
                <p className="text-xl text-white">2020</p>
                <h3 className="text-5xl font-bold text-white mt-2 mb-16">Portfolio</h3>
                <p className="text-xl text-white leading-8">Full-stack développement
                  <br />
                Application web
                </p>
                <div className="absolute" style={{ bottom: "4rem" }}>
                  <img className="inline-block w-12 mx-2" src="/images/icones_langage/nextjs.png" alt="Logo nextjs" title="Nextjs" />
                  <img className="inline-block w-12 mx-2" src="/images/icones_langage/react.png" alt="Logo react" title="React" />
                  <img className="inline-block w-12 mx-2" src="/images/icones_langage/tailwind.png" alt="Logo tailwindcss" title="Tailwindcss" />
                </div>
              </div>
              <div className="w-1/2 py-8">
                <img className="block h-full rounded-l-md object-cover object-left" alt="" src="/images/images_card/portfolio.png" />
              </div>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hide"
              animate="show"
              transition={{ ease: "anticipate", duration: "0.4" }} className="m-10 w-2/5" style={{ minWidth: "800px", height: "500px", boxShadow: '0 4px 14px 0 var(--button-green)' }}>
            <Link href="https://github.com/anonymze/centralisation_laravel">
              <a target="_blank" className="flex h-full w-full bg-green-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105" >
                <div className="w-1/2 p-16">
                  <p className="text-xl text-white">2019</p>
                  <h3 className="text-5xl font-bold text-white mt-2 mb-16">Centralisation de stock</h3>
                  <p className="text-xl text-white leading-8">Full-stack développement
                  <br />
                Application web
                </p>
                  <div className="absolute" style={{ bottom: "4rem" }}>
                    <img className="inline-block w-12 mx-2" src="/images/icones_langage/laravel.png" alt="Logo Laravel" title="Laravel" />
                    <img className="inline-block w-12 mx-2" src="/images/icones_langage/prestashop.png" alt="Logo Prestashop" title="Prestashop" />
                  </div>
                </div>
                <div className="w-1/2 py-8">
                  <img className="block h-full rounded-l-md object-cover" alt="" src="/images/images_card/centralisation.png" />
                </div>
              </a>
            </Link>
            </motion.div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
