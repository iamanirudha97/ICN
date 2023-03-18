import { useHistory } from "react-router-dom"
export default function Canceled() {
  const history = useHistory()

  return (
    <div className='checkout'>
        <h1 style={{ marginTop: "100px"}} >Payment failed due to Network Error </h1>
        <p style={{ marginTop: "30px"}}>Payment was not successful, Please Try Again later</p>
        <div>
          <button className='checkout-btn' 
            onClick={() => history.push('/home')}
            style={{ marginTop: "50px",  width: '35%'}}           
          >
            Continue Shopping
          </button>
        </div>
      </div>
  )
}