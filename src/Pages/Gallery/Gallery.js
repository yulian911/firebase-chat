import React from "react";
import { useState } from "react";
import ImageGrid from "../../Conponents/ImageGrid";
import Modal from "../../Conponents/Modal";
import Title from "../../Conponents/Title";
import UploadForm from "../../Conponents/UploadForm";
import styles from "./gallery.module.css";
import { motion } from "framer-motion";

const Gallery = () => {
  const [selected, setSelected] = useState();

  console.log(selected);
  return (
    <motion.div
      className={styles.gallery}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Title />
      <UploadForm />
      <ImageGrid styles={styles} setSelected={setSelected} />
      {selected && (
        <Modal styles={styles} selected={selected} setSelected={setSelected} />
      )}
    </motion.div>
  );
};

export default Gallery;
