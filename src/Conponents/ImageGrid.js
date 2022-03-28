import React from "react";
import { useCollection } from "./../hooks/useCollection";
import { motion } from "framer-motion";

const ImageGrid = ({ styles, setSelected }) => {
  const { documents } = useCollection("gallery");
  return (
    <div className={styles.img_grid}>
      {documents &&
        documents.map((el) => (
          <motion.div
            className={styles.img_wrap}
            onClick={() => setSelected(el.image)}
            layout
            whileHover={{
              opacity: 1,
            }}
          >
            <motion.img
              src={el.image}
              alt="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
