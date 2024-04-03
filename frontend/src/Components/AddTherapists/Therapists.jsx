import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdDoneOutline } from "react-icons/md";
import { ImCross } from "react-icons/im";
import axios from 'axios';


const Therapists = () => {
    const [therapists,setTherapists]=useState([])
    const token=sessionStorage.getItem('token')
    console.log(token);

    useEffect(()=>{
        axios.get("http://localhost:4200/api/hope/view-therapist")
        .then((response)=>{ 
          setTherapists(response.data.data)
          console.log(response.data);
        }
        )},[])
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Name:</Card.Title>
        <Card.Text>
            Experience:
        </Card.Text>
        <Card.Text>
            Qualification:
        </Card.Text>
        <Card.Text>
            About:
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Age:</ListGroup.Item>
        <ListGroup.Item>E-mail:</ListGroup.Item>
        {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Accept<MdDoneOutline /></Card.Link>
        <Card.Link href="#">Decline<ImCross /></Card.Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Therapists