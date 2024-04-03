import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Profile = () => {
    const token=sessionStorage.getItem('token')
    const [profile,setProfile]=useState([])
    useEffect(()=>{
        if(token!==null){
            axios.get(`http://localhost:4200/api/hope/profile`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                  },   
            }).then((response)=>{
                console.log(response);
                setProfile(response.data.data)
            })
        }

    },[token])
  return (
    <div>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Username:{profile.username}</Card.Title>
        <Card.Text>
        Name:{profile.name}
        </Card.Text>
        <Card.Text>
        Password:
        </Card.Text>
        <Card.Text>
        Email: {profile.email}
        </Card.Text>
        <Card.Text>
        Phone:{profile.phone}
        </Card.Text>
        <Link to={'/editprofile'}>
        <Button variant="primary">Edit</Button></Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Profile