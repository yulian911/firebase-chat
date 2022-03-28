import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import styles from "../Pages/Gallery/gallery.module.css";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className={styles.progress_bar}
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    >
      ProgressBar
    </motion.div>
  );
};

export default ProgressBar;
