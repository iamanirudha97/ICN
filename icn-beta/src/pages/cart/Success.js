import {useHistory} from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Success() {
    const history = useHistory()
    const { user } = useAuthContext()
    
    const handleClick = async () => {
        const carts = await projectFirestore.collection('Cart ' + user.uid).get()
        for(var snap of carts.docs){
            projectFirestore.collection('Cart ' + user.uid).doc(snap.id).delete()
        }
        history.push('/home')
    }

  return (   
    <div>
    <div>
        <h1 style={{ marginTop: "100px"}}> Thank you for your order </h1>
        <p style={{ marginTop: "30px"}}> We are currently processing your order and will send you a confirmation email shortly </p>
    </div>
    <div>
        <button className="checkout-btn" onClick={handleClick} style={{ marginTop: "50px", width:'35%', cursor: 'pointer'}}>
            continue shopping
        </button>
    </div>

    </div>
  )
}