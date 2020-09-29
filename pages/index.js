import Layout from "../components/Layout";
import util_styles from "../styles/utils.module.css";
import Button from "../components/utilities/Button";
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
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
           <Link href={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={util_styles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
         
          ))}
        </ul>
      </section>
      <Button color="red">Hey</Button>
    </Layout>
  );
}

export async function getStaticProps() {

  // const res = await fetch('..')
  // return res.json();

  // return databaseClient.query('SELECT posts...')


  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

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
