import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ToggleThemeDropdown } from "./ui/dropdown-menu/components/toggle-theme-dropdown";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export const siteTitle = "tastefy.rocks :: Descubra músicas e emoções";

export default function Layout({
  children,
  post,
}: {
  children: React.ReactNode;
  homePosts?: boolean;
  post?: boolean;
}) {
  const { data: session, status } = useSession();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              "tastefy.rocks :: Descubra músicas e emoções"
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta
            name="og:title"
            content={"tastefy.rocks :: Descubra músicas e emoções"}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div>
          <ToggleThemeDropdown />
        </div>
        {!session && (
          <>
            <h1>You are not signed in</h1> <br />
            <Link href="/auth">Sign in</Link>
          </>
        )}
        {session && (
          <>
            <h1>Tu está logado.</h1> <br />
            <Button onClick={() => signOut()}>Sighn Out</Button>
          </>
        )}

        <header className={styles.header}></header>
        {status === "loading" && "Carregando"}
        <main>{children}</main>
        {post && (
          <div className={styles.backToHome}>
            <Link href="/posts">← Back to posts</Link>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
