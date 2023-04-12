import './ReviewForm.css'
import {useAuthContext} from '../../hooks/useAuthContext'
import { timestamp } from '../../firebase/config'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useFirestore } from '../../hooks/useFirestore'
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"    
}

export default function ReviewForm() {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [newReview, setNewReview] = useState('')
    const [rating, setRating] = useState('')
    const { user } = useAuthContext()
    const {addDocument } = useFirestore('reviews')
    const stars = Array(5).fill(0)
    

    
    const handleClick = value => {
        setCurrentValue(value)             
    }

    useEffect( ()=> {
        console.log(rating)
    }, [rating])
    
    useEffect(()=> {
        setRating(currentValue)
    }, [currentValue])              

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(0)
    }     
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const reviewToAdd = {
            displayName : user.displayName,
            photoURL : user.photoURL,
            rating,
            content : newReview,
            createdAt: timestamp.fromDate(new Date()),
            id : uuidv4()
        }

        await addDocument(reviewToAdd)
        // console.log('object',reviewToAdd)   
    }
    
  return (
    <div className='testimonials'>
        <h3>Rate us by submitting our review form</h3>

        <form className='add-testimonial' onSubmit={handleSubmit}>

        <div style={styles.container}>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>      
    </div>

            <label>
                <span> Tell us how you feel: </span>
                <textarea 
                    placeholder='Rate us '
                    required
                    onChange={(e)=> setNewReview(e.target.value)}
                    value={newReview}
                > </textarea>
            </label>

            <button className="form-btn"> Add review </button>
        </form>
    </div>
  )
}

const styles = {
    container: {
      marginTop: '45px',
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    }
  }