import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function CreateFeed() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container' style={{marginTop:"50px"}}  >
        <h1>Creat Feed</h1>
    <Form style={{marginTop:"25px"}} onSubmit={handleSubmit} >
        
      <Row className="mb-3 gx-5">
      <Form.Group as={Col} controlId="user">
          <Form.Label>UserName</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={handleChange}>
            <option>user</option>
            <option>Image</option>
            <option>Video</option>
          </Form.Select>
        </Form.Group>
       
      </Row>

      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Text</Form.Label>
        <Form.Control placeholder="Enter text" onChange={handleChange} />
      </Form.Group>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control type='file' onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="voice">
          <Form.Label>Voice</Form.Label>
          <Form.Control onChange={handleChange} />
        </Form.Group>
      </Row>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default CreateFeed;