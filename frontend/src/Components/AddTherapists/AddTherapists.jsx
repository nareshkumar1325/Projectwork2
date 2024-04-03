import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const AddTherapists = () => {
  return (
    <div>
        
  <Form style={{marginLeft:"50px"}} >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name:</Form.Label>
        <Form.Control type="text"  />
        <Form.Label>Age:</Form.Label>
        <Form.Control type="text"  />
        <Form.Label>Qualification:</Form.Label>
        <Form.Control type="text"  />
        <Form.Label>Experience:</Form.Label>
        <Form.Control as="textarea" rows={4} />
        {/* <Form.Control type="text"  /> */}
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>About:</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <center>
      <Button variant="primary">Submit</Button>{' '}
      </center>
    </Form>
    </div>
  )
}

export default AddTherapists