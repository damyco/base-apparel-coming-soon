import Head from "next/head";
import Form from "../components/Form";
import styles from "../styles/index.module.css";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>We&apos;re coming soon! | Base Apparel</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <img className={styles.logo} src="logo.svg" alt="logo" />
            <div className={styles.heroImageMobile}></div>

            <h1>
              <span className={styles.headingThin}>We&apos;re</span> coming soon
            </h1>
            <p>
              Hello fellow shoppers! We&apos;re currently building our new
              fashion store. Add your email below to stay up-to-date with
              announcements and our launch deals.
            </p>

            <Form />
          </div>
          <div className={styles.heroImageDesktop}></div>
        </div>
      </main>
    </>
  );
}
