
import Item from "./items";



const Storage = () =>{
  return (
        <div className='container '>
      <div className='row'>
       <div className='col-sm-12 col-md-12 col-lg-4'>
        <Item
    
     img='image/5.png' alt='mikee'
     price='5.0 (6). USA'
     name='life lessons with katie zaferes'
     details='from $136 / person'
    
/>
 </div>
          <div className='col-sm-12 col-md-12 col-lg-4'>
          <Item
     img='image/10.png' alt='mike'
     price='5.0 (30) . USA'
     name='learn  wedding photography ' 
     details='from $125 / person'

      />
        </div>

      <div className='col-sm-12 col-md-12 col-lg-4'>
       <Item
       img='image/6.png'
       price='4.8 (2) . USA'
       name='Group mountain biking'
       details='from $50 / person'
       
       
       
       />
      </div>
        
     
     
     </div>
     
    </div>
   
  )
}
export default Storage;