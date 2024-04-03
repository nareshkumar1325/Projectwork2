import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const Addpatients = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
      <Card.Title>Name:</Card.Title>
      <Card.Text>
      </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Age:</ListGroup.Item>
        <ListGroup.Item>Mental Health Status:</ListGroup.Item>
        <ListGroup.Item>Reference:</ListGroup.Item>
      </ListGroup>
      {/* <Card.Body> */}
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      {/* </Card.Body> */}
    </Card>
    </div>
  )
}

export default Addpatients