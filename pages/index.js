import Layout from "../components/Layout";
import home_module from '../styles/pages/home.module.css';
import Button from '../components/utils/Button';

export default function Home() {
  return (
    <Layout home>
      <div className={home_module.presentation}>
        <div className={home_module.presentation_left}>
          <p className={home_module.left_title}>Bonjour, je suis Yann,</p>
          <p className={home_module.left_text}>un développeur web/mobile full stack</p>
          <Button color="blue">Dites moi bonjour !</Button>
        </div>
        <div className={home_module.presentation_right}>
          <p className={home_module.right_text}>Je suis un développeur basé à Toulouse. Je travail pour la compagnie <span className={home_module.langages}>Inconito</span> en tant qu'alternant, je suis sur ma première année d'experience avec le digital.<br />
          J'ai une expérience junior avec l'<span className={home_module.langages}>HTML</span>, le <span className={home_module.langages}>JS</span> et le <span className={home_module.langages}>CSS</span>, et j'utilise régulièrement les frameworks <span className={home_module.langages}>React</span>, <span className={home_module.langages}>NextJs</span>, <span className={home_module.langages}>Laravel</span>, <span className={home_module.langages}>Ionic</span>, <span className={home_module.langages}>Drupal</span>.
          </p>
          <p className={home_module.right_text}>Je vise à accumuler de l'expérience <span className={home_module.langages}>full-stack</span> pour la polyvalence et l'autonomie.</p>
          <p className={home_module.right_text}>Je fais énormément d'intégration mais je recherche un bagage plus important en back-end.</p>
        </div>
      </div>
      <article className="border-t-2 border-solid border-gray-300">
        <section className="m-16">
          <h2 className="font-bold text-4xl mb-12">Travaux récents</h2>
          <div className="flex flex-wrap justify-center w-100">
            <div className="flex m-10 w-2/5 bg-purple-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105" style={{ height: "500px", boxShadow: '0 4px 14px 0 var(--button-purple)'}}>
              <div className="w-1/2 p-16">
                <p className="text-xl text-white">2020</p>
                <h3 className="text-5xl font-bold text-white mt-2 mb-16">Smash Lab</h3>
                <p className="mb-16 text-xl text-white leading-8">Full-stack development
                  <br />
                Mobile App
                </p>
                <div className="pt-12">
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                </div>
              </div>
              <div className="w-1/2 py-8">
                <img className="block h-full rounded-l-md" alt="" src="/images/logo.png" />
              </div>
            </div>
            <div className="flex m-10 w-2/5 bg-pink-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105" style={{ height: "500px", boxShadow: '0 4px 14px 0 var(--button-magenta)'}}>
            <div className="w-1/2 p-16">
                <p className="text-xl text-white">2020</p>
                <h3 className="text-5xl font-bold text-white mt-2 mb-16">Smash Lab</h3>
                <p className="mb-16 text-xl text-white leading-8">Full-stack development
                  <br />
                Mobile App
                </p>
                <div className="pt-12">
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                </div>
              </div>
              <div className="w-1/2 py-8">
                <img className="block h-full rounded-l-md" alt="" src="/images/logo.png" />
              </div>
            </div>
            <div className="flex m-10 w-2/5 bg-green-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105" style={{ height: "500px",boxShadow: '0 4px 14px 0 var(--button-green)' }}>
            <div className="w-1/2 p-16">
                <p className="text-xl text-white">2020</p>
                <h3 className="text-5xl font-bold text-white mt-2 mb-16">Smash Lab</h3>
                <p className="mb-16 text-xl text-white leading-8">Full-stack development
                  <br />
                Mobile App
                </p>
                <div className="pt-12">
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                </div>
              </div>
              <div className="w-1/2 py-8">
                <img className="block h-full rounded-l-md" alt="" src="/images/logo.png" />
              </div>
            </div>
            <div className="flex m-10 w-2/5 bg-blue-600 rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105" style={{ height: "500px", boxShadow: '0 4px 14px 0 var(--button-blue)' }}>
            <div className="w-1/2 p-16">
                <p className="text-xl text-white">2020</p>
                <h3 className="text-5xl font-bold text-white mt-2 mb-16">Smash Lab</h3>
                <p className="mb-16 text-xl text-white leading-8">Full-stack development
                  <br />
                Mobile App
                </p>
                <div className="pt-12">
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                  <img className="inline-block w-12 mx-1" src="/images/logo.png" alt=""/>
                </div>
              </div>
              <div className="w-1/2 py-8">
                <img className="block h-full rounded-l-md" alt="" src="/images/logo.png" />
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}

// export async function getStaticProps() {

//   // const res = await fetch('..')
//   // return res.json();

//   // return databaseClient.query('SELECT posts...')


//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }


// <style jsx global>{`
//   html,
//   body {
//     padding: 0;
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//       Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//       sans-serif;
//     box-sizing: border-box;
//   }

//   *,
//   *:before,
//   *:after {
//     box-sizing: inherit;
//   }
// `}</style>
