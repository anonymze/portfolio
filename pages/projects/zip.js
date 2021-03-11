import Head from "next/head";
import Layout from "../../components/Layout";
import ButtonCard from '../../components/utils/ButtonCard';
export default function Zip() {
  return (
    <Layout>
      <Head>
        <title>Portfolio | Zip code</title>
      </Head>
      <article >
        <section className="border-solid border-gray-300 border-b-2">
          <h2 class="font-bold text-4xl md:m-16 my-8">Concept</h2>
          <p className="md:m-16 my-8 mx-4 md:text-justify">
            Un rechercheur de code postale, il vous indique d'où provient le zip code inséré.
          </p>
        </section>
        <section>
          <h2 class="font-bold text-4xl md:m-16 my-8">Techniques</h2>
          <p className="md:m-16 my-8 mx-4 md:text-justify">
           Mes premières mains sur le framework <strong>VueJS</strong> et le <strong>Progressive Web App</strong>, combinés à <strong>Ionic</strong> pour une approche <strong>"mobile first"</strong>.
                    </p>
        </section>
        <div className="md:w-1/3 my-0 mx-auto md:mb-0 mb-24 md:mt-32">
          <ButtonCard colored project="Zip code" see_project="https://zipfinder-194a3.web.app/">Voir le site</ButtonCard>
        </div>
      </article>
    </Layout>
  )
}