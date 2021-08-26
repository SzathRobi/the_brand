import React from "react";
import Button from "../../controls/Button";
import styles from "../../../styles/sections/CustomItem/custom_item_options.module.scss";

function CustomItemOptions() {
  return (
    <section className={styles.custom_item_options}>
      <form>
        <article className={styles.option_container}>
          <h3>Anyag</h3>
          <div className={styles.btn_container}>
            <button>AGYAG</button>
            <button>BŐR</button>
            <button>KENDER</button>
          </div>
        </article>
        <article className={styles.option_container}>
          <h3>Típus</h3>
          <div className={styles.btn_container}>
            <button>TÁSKA</button>
            <button>TÁRCA</button>
            <button>VALAMI</button>
            <button className={styles.add_type}>
              EGYÉB <span>+</span>
            </button>
          </div>
        </article>
        <article className={styles.option_container}>
          <h3>Szín</h3>
          <div className={styles.btn_container}>
            <label className={styles.color_box}>
              <input type="checkbox" />
            </label>
            <label className={styles.color_box}>
              <input type="checkbox" />
            </label>
            <label className={styles.color_box}>
              <input type="checkbox" />
            </label>
            <label className={styles.color_box}>
              <input type="checkbox" />
            </label>
          </div>
        </article>
        <article className={styles.option_container}>
          <h3>Leírás</h3>
          <textarea cols="34" rows="8"></textarea>
        </article>
        <article className={styles.option_container}>
          <h3>Leírás</h3>
          <div className={styles.img_upload_surface}>
            <span>+</span>
          </div>
        </article>

        <Button>KÜLDÉS</Button>
      </form>
    </section>
  );
}

export default CustomItemOptions;
