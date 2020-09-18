import Head from "next/head";
import Link from "next/link";
import Layout, { site_title } from '../components/Layout';
import util_styles from '../styles/utils.module.css';
import Button from '../components/utilities/Button'

export default function Home() {
  return (
   <Layout home>
      <Head>
        <title>{site_title}</title>
      </Head>
      <section className={util_styles.headingMd}>
        <p>Slt je suis le bg du 31500 let's go la fam heyhey à nous les zoulettes, Godefroy le Hardi compte de Montmirail n'a qu'a bien se tenir &#128541; &#x1F639;</p>        
      </section>
      <Button>Hey</Button>
    </Layout>
  );
}

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