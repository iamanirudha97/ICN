import "./ReviewComments.css"
import Avatar from "../../components/Avatar"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ReactStars from 'react-rating-stars-component'

export default function reviewComments({comments}) {


  return (
    <div className="review-comments" style={{width: '1050px'}} >
      <h4 style={{ marginTop: "60px"}}> Testimonials </h4>
      <ul>
        {comments.length > 0 && comments.map( comment => (
          <li key={comment.id}>
            <div className="comment-author">
              <Avatar src={comment.photoURL} />
              <p>{comment.displayName}</p>
            </div>
            <div className="comment-date">
              <p>{ formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true }) }</p>   
            <div>
              <ReactStars size={25} value={comment.rating} edit={false}/> 
            </div>         
            </div>           

            <div className="comment-content">
              {comment.content}
            </div>

          </li>
        ))}
      </ul>

    </div>
  )
}