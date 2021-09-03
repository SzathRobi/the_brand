import Head from "next/head";
import Image from "next/image";
import Button from "../components/controls/Button";
import Categories from "../components/sections/Home/Categories";
import Featured from "../components/sections/Home/Featured";
import Landing from "../components/sections/Home/Landing";
import LandingProducts from "../components/sections/Home/LandingProducts";
import OnSale from "../components/sections/Home/OnSale";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css"
        />
      </Head>
      <Landing />
      <LandingProducts />

      <script
        async
        src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"
      ></script>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="ZjQ2MzBiNGEtZDZmZC00NWU3LWIwMjktMmE5ODlmYWI0NmFjNjM3NjU0MDI3MTA0MzgzNjY3"
        hidden
      ></div>
      {/* <Categories />
      <Featured />
      <OnSale />
       */}
    </div>
  );
}
