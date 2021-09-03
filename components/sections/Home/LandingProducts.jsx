import React from "react";
import Image from "next/image";
import clay_cups from "../../../public/imgs/clay_cups.jpg";
import styles from "../../../styles/sections/Home/landing_products.module.scss";

function LandingProducts() {
  console.log(clay_cups);

  return (
    <section className={styles.landing_products}>
      <h2>TERMÉKEK</h2>
      {/**
       * ITEM 1
       */}
      <article>
        <div className={styles.img_container}>
          <Image
            src="/imgs/clay_cups.jpg"
            alt="product"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.product_info}>
          <h3>Komposztáló</h3>
          <p>30.000Ft</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            beatae voluptatum nesciunt, numquam itaque quaerat ipsam odit fuga,
            eaque porro velit enim adipisci quam natus quis! Error
            exercitationem voluptates beatae.
          </p>
          <button
            className="snipcart-add-item"
            data-item-id="starry-night"
            data-item-price="79.99"
            data-item-url="/"
            data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            data-item-image={clay_cups}
            data-item-name="The Starry Night"
          >
            GIVE MONEY
          </button>
        </div>
      </article>
      {/**
       * ITEM 2
       */}
      <article>
        <div className={styles.img_container}>
          <Image
            src="/imgs/custom_item_landing.jpg"
            alt="product"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.product_info}>
          <h3>Komposztáló</h3>
          <p>30.000Ft</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            beatae voluptatum nesciunt, numquam itaque quaerat ipsam odit fuga,
            eaque porro velit enim adipisci quam natus quis! Error
            exercitationem voluptates beatae.
          </p>
          <button
            className="snipcart-add-item"
            data-item-id="starry-night"
            data-item-price="79.99"
            data-item-url="/"
            data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            data-item-image={clay_cups}
            data-item-name="The Starry Night"
          >
            GIVE MONEY
          </button>
        </div>
      </article>
      {/**
       * ITEM 3
       */}
      <article>
        <div className={styles.img_container}>
          <Image
            src={clay_cups}
            alt="product"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.product_info}>
          <h3>Komposztáló</h3>
          <p>30.000Ft</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            beatae voluptatum nesciunt, numquam itaque quaerat ipsam odit fuga,
            eaque porro velit enim adipisci quam natus quis! Error
            exercitationem voluptates beatae.
          </p>
          <button
            className="snipcart-add-item"
            data-item-id="starry-night"
            data-item-price="79.99"
            data-item-url="/"
            data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            data-item-image={clay_cups}
            data-item-name="The Starry Night"
          >
            GIVE MONEY
          </button>
        </div>
      </article>
      {/**
       * ITEM 4
       */}
      <article>
        <div className={styles.img_container}>
          <Image
            src="/imgs/custom_item_landing.jpg"
            alt="product"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.product_info}>
          <h3>Komposztáló</h3>
          <p>30.000Ft</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            beatae voluptatum nesciunt, numquam itaque quaerat ipsam odit fuga,
            eaque porro velit enim adipisci quam natus quis! Error
            exercitationem voluptates beatae.
          </p>
          <button
            className="snipcart-add-item"
            data-item-id="starry-night"
            data-item-price="79.99"
            data-item-url="/"
            data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            data-item-image={clay_cups}
            data-item-name="The Starry Night"
          >
            GIVE MONEY
          </button>
        </div>
      </article>
    </section>
  );
}

export default LandingProducts;
