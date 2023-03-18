import { useState } from "react"
import { projectStorage, projectAuth } from "../../firebase/config"

export const useCreate = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [productImageURL, setProductImageURL] = useState('')

    const uploadProductImage = async(image) => {
        setError(null)
        setIsPending(true)

        try{            
            const uploadPath = `productImages/${projectAuth.currentUser.uid}/${image.name}`
            const img = await projectStorage.ref(uploadPath).put(image)
            const imgURL = await img.ref.getDownloadURL()

            setProductImageURL(imgURL)
            return imgURL
            
        }
        catch(err){
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }

    }
    return {error, isPending, uploadProductImage, productImageURL }
}