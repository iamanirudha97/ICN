import ReviewForm from "./ReviewForm"
import './Review.css'
import {useCollection} from '../../hooks/useCollection'
import ReviewComments from './ReviewComments'
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Review() {
    const {error, documents} = useCollection('reviews')
    const { user } = useAuthContext()

    if(error){
        return <div className="error"> {error} </div>
    }

    if(!documents){
        return <div className="loading">Loading...</div>
    }

  return (
    <div className="review-page">
        {user && <ReviewForm />}
        {!user && (
          <div> <h4> Please login to submit a review </h4> </div>
        )}
        <ReviewComments comments={documents} error={error}/>        
    </div>
  )
}