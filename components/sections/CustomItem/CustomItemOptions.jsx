import React, { useState } from "react";
import Button from "../../controls/Button";
import styles from "../../../styles/sections/CustomItem/custom_item_options.module.scss";

function CustomItemOptions() {
  const [material, setMaterial] = useState(1);
  const updateMaterial = (num) => setMaterial(num);

  const material_btn_1 = {
    backgroundColor: material === 1 ? "#9f666f" : "#fff",
    color: material === 1 ? "#fff" : "#9f666f",
  };
  const material_btn_2 = {
    backgroundColor: material === 2 ? "#9f666f" : "#fff",
    color: material === 2 ? "#fff" : "#9f666f",
  };

  const [type, setType] = useState(1);
  const updateType = (num) => setType(num);

  const type_btn_1 = {
    backgroundColor: type === 1 ? "#9f666f" : "#fff",
    color: type === 1 ? "#fff" : "#9f666f",
  };
  const type_btn_2 = {
    backgroundColor: type === 2 ? "#9f666f" : "#fff",
    color: type === 2 ? "#fff" : "#9f666f",
  };
  const type_btn_3 = {
    backgroundColor: type === 3 ? "#9f666f" : "#fff",
    color: type === 3 ? "#fff" : "#9f666f",
  };

  const [isBrown, setIsBrown] = useState(false);
  const brown_style = {
    border: isBrown ? "1px solid rgba(255,255,255,0.3)" : "none",
  };
  const [isYellow, setIsYellow] = useState(false);
  const yellow_style = {
    border: isYellow ? "1px solid rgba(255,255,255,0.3)" : "none",
  };
  const [isOrange, setIsOrange] = useState(false);
  const orange_style = {
    border: isOrange ? "1px solid rgba(255,255,255,0.3)" : "none",
  };
  const [isRed, setIsRed] = useState(false);
  const red_style = {
    border: isRed ? "1px solid rgba(255,255,255,0.3)" : "none",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.custom_item_options}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <article className={styles.option_container}>
          <h3>Anyag</h3>
          <div className={styles.btn_container}>
            <button style={material_btn_1} onClick={() => updateMaterial(1)}>
              AGYAG
            </button>
            <button style={material_btn_2} onClick={() => updateMaterial(2)}>
              BŐR
            </button>
          </div>
        </article>
        <article className={styles.option_container}>
          <h3>Típus</h3>
          <div className={styles.btn_container}>
            <button style={type_btn_1} onClick={() => updateType(1)}>
              TÁSKA
            </button>
            <button style={type_btn_2} onClick={() => updateType(2)}>
              TÁRCA
            </button>
            <button style={type_btn_3} onClick={() => updateType(3)}>
              VALAMI
            </button>
            <button className={styles.add_type}>
              EGYÉB <span>+</span>
            </button>
          </div>
        </article>
        <article className={styles.option_container}>
          <h3>Szín</h3>
          <div className={styles.btn_container}>
            <label className={styles.color_box} style={brown_style}>
              <input type="checkbox" onChange={() => setIsBrown(!isBrown)} />
            </label>
            <label className={styles.color_box} style={yellow_style}>
              <input type="checkbox" onChange={() => setIsYellow(!isYellow)} />
            </label>
            <label className={styles.color_box} style={orange_style}>
              <input type="checkbox" onChange={() => setIsOrange(!isOrange)} />
            </label>
            <label className={styles.color_box} style={red_style}>
              <input type="checkbox" onChange={() => setIsRed(!isRed)} />
            </label>
          </div>
        </article>
        <article className={styles.option_container}>
          <h3>Leírás</h3>
          <textarea cols="34" rows="8"></textarea>
        </article>
        <article className={styles.option_container}>
          <h3>Kép (opcionális)</h3>
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
