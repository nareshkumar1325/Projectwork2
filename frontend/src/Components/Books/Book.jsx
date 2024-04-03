import React, { useState ,useEffect}  from 'react'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsFillCartFill } from "react-icons/bs";



const Book = () => {
    // const navigate= useNavigate()
    const [bookData,setbookData]=useState([])
    const token=sessionStorage.getItem('token')
    console.log(token);
    useEffect(()=>{
        axios.get("http://localhost:4200/api/hope/view-books")
        .then((response)=>{ 
          setbookData(response.data.data)
          console.log(response.data);
        }
        )},[])

  return (
    <div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
            {bookData.map((item)=>(
  <Card key={item._id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/${item.image}`} />
      <Card.Body>
        <Card.Title>
        
          <span> {item.title}</span>
         
        </Card.Title>
        <Card.Text>
         Author: {item.author}
        </Card.Text>
        <Card.Text>
           About:{item.about}
        </Card.Text>
        <Card.Text>
          Price:{item.price}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        <Button ><BsFillCartFill />
</Button>

      </Card.Body>
    </Card>
    ))}
    </div>
    </div>
  )
}

export default Book




    



