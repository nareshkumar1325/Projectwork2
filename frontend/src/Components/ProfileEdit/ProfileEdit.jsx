import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProfileEdit = () => {
  return (
    <div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name:</Card.Title>
        <Card.Text>
          Phone:
        </Card.Text>
        <Card.Text>
            Email:
        </Card.Text>
        <Card.Text>
            Password:
        </Card.Text>
        <Button variant="primary">Update</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProfileEdit