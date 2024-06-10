
import { Star } from "./icons";

const Item = (props) =>{
return (
    <div>
    <img src={props.img}  alt='mikee' className='rounded firs' />
    <div className='d-flex gap-2'>
      <Star/>
      <p>{props.price}</p>

    </div>
      <p>{props.name}</p>
      <h5>{props.details}</h5>
    
  </div>
      

)
}
export default Item;

