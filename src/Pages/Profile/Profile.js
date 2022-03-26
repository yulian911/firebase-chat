import React from "react";
import Container from "../../Conponents/Container";
import { useApp } from "../../Contex/AppContext";
import { auth } from "../../FIrebase/config";
import { useCollection } from "../../hooks/useCollection";
import UserProfile from "./../../Conponents/UserProfile";

const Profile = () => {
  const {user} =useApp()

  const{documents:users}=useCollection('users', ["uid","==" ,user.uid],null)

  return user?(
    <Container>
      <section>
        {users&&users.map(el=>
            <UserProfile el={el} key={el.uid}/>
          )}
      </section>
    </Container>
  ):null
};

export default Profile;
