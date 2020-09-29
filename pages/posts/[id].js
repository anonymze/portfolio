import Head from "next/head";
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import util_styles from '../../styles/utils.module.css';


// check if fallback is being rendered, no props during fallback
import { useRouter } from 'next/router';

// postData est l'id du post aui sera affiché
export default function Post({ postData }) {
  const router = useRouter();

  // usefull if number of static pages high and you are fetching data
  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }
  return (
    <Layout>
      <Head>
        <title>Post {postData.title}</title>
      </Head>
      <article>
        <h1 className={util_styles.heading2Xl}>{postData.title}</h1>
        <br />
        <h2 className={util_styles.headingXl}>id: {postData.id}</h2>
        <br />
        <div className={util_styles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      
    </Layout>
  )
}

// les paths possibles
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// params est l'url ?, param.id est egal à la fin de l'url j'imagine
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}


