import { useState,useEffect} from "react";

import Camera from "./../assets/Camera";
import Delete from "./../assets/Delete";
import { storage,db,auth } from "../FIrebase/config";
import Img from "./../assets/image1.jpg";
import { doc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router";

const UserProfile = ({el}) => {

    const [img, setImg] = useState("");
    const history = useNavigate("");
 
    useEffect(() => {
   
        if(img){
          const uploadImg =async () =>{
            const imgRef = ref(
              storage,
              `avatar/${new Date().getTime()} - ${img.name}`
            );
            try{
           
              if (el.avatarPath) {
                await deleteObject(ref(storage, el.avatarPath));
              }
              const snap = await uploadBytes(imgRef,img)
              const url = await getDownloadURL(ref(storage,snap.ref.fullPath))
              await updateDoc(doc(db,'users',auth.currentUser.uid),{
                avatar:url,
                avatarPath:snap.ref.fullPath
              })
              // console.log(url)
               setImg('')
    
            }catch(err){
              console.log(err.message)
            }
           
    
       
          
          }
          uploadImg()
        }
     
      }, [img,el.avatarPath]);
    
      const deleteImage = async () => {
        try {
          const confirm = window.confirm("Delete avatar?");
          if (confirm) {
            await deleteObject(ref(storage, el.avatarPath));
            await updateDoc(doc(db, "users", auth.currentUser.uid), {
              avatar: "",
              avatarPath: "",
            });
            history.replace("/");
          }
        } catch (err) {
          console.log(err.message);
        }
      };
    

  return (
    <>
        <div className="profile_container" key={el.uid}>
          <div className="img_container">
            <img src={el.avatar || Img} alt="avatar" />
            <div className="overlay">
              <div>
                <label htmlFor="photo">
                  <Camera />
                </label>
                {el.avatar ? <Delete deleteImage={deleteImage} /> : null}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="photo"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
            </div>
          </div>
          <div className="text_container">
      
     
               <h3>{el.name}</h3>
                <p>{el.email}</p>
                <hr />
                <small>Joined on: {el.createAt.toDate().toDateString()}</small>
         
       
           
          </div>
        </div>
    </>
  )
}

export default UserProfile