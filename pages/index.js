import Layout from "../components/Layout";
import home_module from '../styles/pages/home.module.css';
import Button from '../components/utils/Button';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className={home_module.presentation}>
        <div className={home_module.presentation_left}>
          <p className={home_module.left_title}>Bonjour, je suis Yann,</p>
          <p className={home_module.left_text}>un développeur web/mobile full stack</p>
          <Button color="blue">Dites moi bonjour !</Button>
        </div>
        <div className={home_module.presentation_right}>
          <p className={home_module.right_text}>Je suis un développeur basé à Toulouse. Je travail pour la compagnie <span className={home_module.langages}>Inconito</span> en tant qu'alternant, je suis sur ma première année d'experience avec le digital.<br/>
          J'ai une expérience junior avec l'<span className={home_module.langages}>HTML</span>, le <span className={home_module.langages}>JS</span> et le <span className={home_module.langages}>CSS</span>, et j'utilise régulièrement les frameworks <span className={home_module.langages}>React</span>, <span className={home_module.langages}>NextJs</span>, <span className={home_module.langages}>Laravel</span>, <span className={home_module.langages}>Ionic</span>, <span className={home_module.langages}>Drupal</span>.
          </p>
          <p className={home_module.right_text}>Je vise à accumuler de l'expérience <span className={home_module.langages}>full-stack</span> pour la polyvalence et l'autonomie.</p>
          <p className={home_module.right_text}>Je fais énormément d'intégration mais je recherche un bagage plus important en back-end.</p>
        </div>

      </div>
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
