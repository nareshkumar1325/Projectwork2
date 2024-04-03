import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


const Addbooks = () => {
  const navigate = useNavigate();
  const [book,setBook]=useState([])
  const inputChange = (event) => {
    const { name, value } = event.target;
    setBook({
      ...book,
      [name]: value,
    });
    console.log(book);
  };
  const handleImage = (event) => {
    setBook({ ...book, image: event.target.files[0] });
    console.log(book.image);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", book.title);
    formData.append("author", book.author);
    formData.append("about", book.about);
    formData.append("price", book.price);
    formData.append("image", book.image);

    axios
      .post(`http://localhost:4200/api/hope/add-book`, formData)
      .then((response) => {
        
        console.log(response);
      });
      event.preventDefault();
      navigate("/books");

  };
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Title:</Form.Label>
      <Form.Control type="text" name='title' onChange={inputChange}
 />
      <Form.Text className="text-muted">
      </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Author:</Form.Label>
      <Form.Control type="text" name='author'onChange={inputChange} />
      <Form.Label>About:</Form.Label>
      <Form.Control type="text" name='about'onChange={inputChange} />
      <Form.Label>Price:</Form.Label>
      <Form.Control type="text" name='price'onChange={inputChange}  />
      <input type="file" name='image' accept=".png,.jpg,.jpeg"
            onChange={handleImage}/>
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={(event) => {
                handleSubmit(event);
              }}
              encType="multipart/form-data">
      Add Book
      </Button>
    </Form>
    </div>
  )
}
export default Addbooks