import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Container from "../../Conponents/Container";
import { useApp } from "../../Contex/AppContext";
import Camera from "./../../assets/Camera";
import Delete from "./../../assets/Delete";
import { storage } from "../../FIrebase/config";
import Img from "../../assets/image1.jpg";

const Profile = () => {
  const { user } = useApp();
  const [img, setImg] = useState("");

  const deleteImage = async () => {
    // try {
    //   const confirm = window.confirm("Delete avatar?");
    //   if (confirm) {
    //     await deleteObject(ref(storage, user.avatarPath));
    //     await updateDoc(doc(db, "users", auth.currentUser.uid), {
    //       avatar: "",
    //       avatarPath: "",
    //     });
    //     history.replace("/");
    //   }
    // } catch (err) {
    //   console.log(err.message);
    // }
  };

  const history = useNavigate("");

  const myDate = new Date(parseInt(user.metadata.createdAt));

  console.log(myDate);

  return user ? (
    <Container>
      <section>
        <div className="profile_container">
          <div className="img_container">
            <img src={user.avatar || Img} alt="avatar" />
            <div className="overlay">
              <div>
                <label htmlFor="photo">
                  <Camera />
                </label>
                {user.avatar ? <Delete deleteImage={deleteImage} /> : null}
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
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <hr />
            <small>Joined on: {myDate.toDateString()}</small>
          </div>
        </div>
      </section>
    </Container>
  ) : null;
};

export default Profile;
