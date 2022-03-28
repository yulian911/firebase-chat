import { useState, useEffect } from "react";
import { db, storage } from "../FIrebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(async () => {
    try {
      const storageRef = ref(storage, `gallery/${file.name}`);
      const snap = await uploadBytesResumable(storageRef, file);

      const urlImg = await getDownloadURL(ref(storage, snap.ref.fullPath));
      setUrl(urlImg);
      let precent = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(precent);

      const refCollection = collection(db, "gallery");
      await addDoc(refCollection, {
        image: urlImg,
        imagePath: snap.ref.fullPath,
        createdAt: Timestamp.fromDate(new Date()),
      });
    } catch (err) {
      setError(err);
      setProgress(null);
    }
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
