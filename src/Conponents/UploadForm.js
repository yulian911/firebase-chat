import React, { useState } from "react";
import Attachment from "../assets/Attachment";
import styles from "../Pages/Gallery/gallery.module.css";
import ProgressBar from "./ProgressBar";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected) {
      setFile(selected);
      setErr("");
    } else {
      setFile(null);
      setErr("Please select an image file (png or jpeg)");
      console.log(selected);
    }
  };
  //   console.log(file && file.name);
  return (
    <form>
      <label className={styles.label}>
        <input type="file" accept="image/*" onChange={changeHandler} />
        <Attachment width="35px" height="35px" />
      </label>

      <div className={styles.output}>
        {err && <div className={styles.error}>{err}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
