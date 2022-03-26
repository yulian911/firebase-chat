import React ,{useState} from "react";

import { useApp } from "../../Contex/AppContext";
import { useCollection } from "../../hooks/useCollection";
import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, setDoc, Timestamp, updateDoc} from "firebase/firestore";
import {  getDownloadURL, ref, uploadBytes } from "firebase/storage";
import User from "../../Conponents/User";
import MessageForm from "../../Conponents/MessageForm";
import { db,storage } from "../../FIrebase/config";
import Message from "../../Conponents/Message";

const Home = () => {



  const {user} =useApp()
  const user1 =user.uid
  const {documents:users}=useCollection('users',['uid','not-in',[user1]])
  const [chat,setChat]=useState('')
  const[text,setText]=useState('')
  const [img,setImg]=useState()
  const[msgs ,setMsgs]=useState([])

  const selectUser=async(user)=>{
    setChat(user)
    const user2 =user.uid
    const id = user1 > user2 ?  `${user1 + user2}`: `${user2+user1}`

    const msgRef =collection(db,"messages",id,'chat')
    const q =query(msgRef, orderBy('createdAt','asc'))

    onSnapshot(q,querySnapshot=>{
      let msgs =[]
      querySnapshot.forEach(doc =>{
        msgs.push(doc.data())
      })
      setMsgs(msgs)
    })

    const docSnap =await getDoc(doc(db,'lastMsg',id))
    if(docSnap.data()&&docSnap.data().from !==user1){
      updateDoc(doc(db,'lastMsg',id),{
        unread:false
      })
    }

  }

  // console.log(msgs)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const user2=chat.uid
    // messages=>id =>chat =>add doc
    const id = user1 > user2 ?  `${user1 + user2}`: `${user2+user1}`
    let url

    if(img){
      const imgRef = ref(storage ,`images/${new Date().getTime()} - ${img.name}`)
      const snap = await uploadBytes(imgRef,img)
      const dlUrl = await getDownloadURL(ref(storage,snap.ref.fullPath))
      url=dlUrl
    }
  
    await addDoc(collection(db,"messages",id,'chat'),{
      text,
      from:user1,
      to:user2,
      createdAt:Timestamp.fromDate(new Date()),
      media:url || ''
    })
    await setDoc(doc(db ,'lastMsg' ,id),{
      text,
      from:user1,
      to:user2,
      createdAt:Timestamp.fromDate(new Date()),
      media:url || '',
      unread:true
    })
    
    setText('')
  }

  return (

    <div className="home_container">
      <div className="users_container">
        {users && users.map((el) => (
          <User
            key={el.uid}
            user={el}
            selectUser={selectUser}
            user1={user1}
            chat={chat}
          />
        ))}
      </div>
      <div className="messages_container">
        {chat ? (
          <>
            <div className="messages_user">
              <h3>{chat.name}</h3>
            </div>
            <div className="messages">
              {msgs.length
                ? msgs.map((msg, i) => (
                    <Message key={i} msg={msg} user1={user1} />
                  ))
                : null}
            </div>
            <MessageForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              setImg={setImg}
            />
          </>
        ) : (
          <h3 className="no_conv">Select a user to start conversation</h3>
        )}
      </div>
    </div>

  )

};

export default Home;
