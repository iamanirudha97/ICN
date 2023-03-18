import { useState, useEffect } from "react"
import { projectFirestore } from '../firebase/config'

export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const ref = projectFirestore.collection('products').doc(id)
        const unsubscribe = ref.onSnapshot((snapshot)=>{
            if(snapshot.data()){
                setDocument({...snapshot.data(), id: snapshot.id})
                setError(null)
                // console.log('document fetched', snapshot.data())
            } else{
                setError('No such document exists')
            }            
            

        },(err)=>{
            console.log(err.message)
            setError('Could not fetch the document')
        })

        return () => unsubscribe()

    }, [ collection, id])

return { document, error }

}