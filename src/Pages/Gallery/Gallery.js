import React from "react";
import { useState } from "react";
import ImageGrid from "../../Conponents/ImageGrid";
import Modal from "../../Conponents/Modal";
import Title from "../../Conponents/Title";
import UploadForm from "../../Conponents/UploadForm";
import styles from "./gallery.module.css";

const Gallery = () => {
  const [selected, setSelected] = useState();

  console.log(selected);
  return (
    <div className={styles.gallery}>
      <Title />
      <UploadForm />
      <ImageGrid styles={styles} setSelected={setSelected} />
      {selected && (
        <Modal styles={styles} selected={selected} setSelected={setSelected} />
      )}
    </div>
  );
};

export default Gallery;
