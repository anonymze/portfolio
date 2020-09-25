import Head from "next/head";
import Link from "next/link";
import Layout, { site_title } from "../components/Layout";
import util_styles from "../styles/utils.module.css";
import Button from "../components/utilities/Button";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{site_title}</title>
      </Head>
      <section className={util_styles.headingMd}>
        <p>
          Slt je suis le bg du 31500, à nous les zoulettes, Godefroy le Hardi
          compte de Montmirail n'a qu'a bien se tenir &#128541; &#x1F639;
        </p>
      </section>
      <section className={`${util_styles.headingMd} ${util_styles.padding1px}`}>
        <h2 className={util_styles.headingLg}>Blog</h2>
        <ul className={util_styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={util_styles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <Button>Hey</Button>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
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
