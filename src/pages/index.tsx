import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout";
import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout homePosts>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Tastefy</h1>
      <Link href="/posts">Go to Posts</Link>
      <br />
      <Link href="/auth">Login</Link>
    </Layout>
  );
}
