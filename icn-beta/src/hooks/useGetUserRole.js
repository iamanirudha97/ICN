import { useAuthContext } from './useAuthContext'
import { useCollection } from './useCollection'
import { useState, useEffect } from 'react'

export const useGetUserRole = () => {
  const { user } = useAuthContext()
  const {documents} = useCollection('users')
  const [currentUserRole, setCurrentUserRole] = useState('')   
    
  useEffect(() => {
    try{
      const currentDoc = documents ? documents.filter(doc => {
        return doc.id === user.uid
      }) : null

      if(currentDoc !== null && documents !== null && user !== null){
        setCurrentUserRole(currentDoc[0].userRole)
      }   
      
    }catch(err){
      console.log(err.message)
    }
   
  }, [documents, user])

  return { currentUserRole }
}