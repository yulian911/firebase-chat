import { useEffect, useState, useRef } from "react"
import { db} from "../FIrebase/config"
import { collection ,onSnapshot,query,where } from "firebase/firestore"

export const useCollection = (c,_q) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const q = useRef(_q).current
  // const order =useRef(_order).current

  useEffect(() => {
    let ref = collection(db,c)

    // /po userze pobiera
    if (q) {
      ref = query(ref ,where(...q))
    }

    const unsubscribe = onSnapshot(ref,(snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        // console.log(doc)
        results.push({...doc.data(), id: doc.id})
      });
      
      // update state
      setDocuments(results)
      setError(null)
    }, error => {
      console.log(error)
      setError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [c,q])

  return { documents, error }
}