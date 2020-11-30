import React, { Component } from 'react';
import "./Form.css"
import { Button, Container, Row, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

//import Form from 'react-bootstrap/Form'



class Form2 extends Component {

    render() {
        return (

          <div>

          <div>
            <h1>Bonjour</h1>
          </div>



            <div className="container_fullDisplay" id="section" style={{ backgroundColor:"blue"}}>
                 <Container>
                <h1>Ajouter un morceaux</h1>
                <br></br>
              
                <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                </Form> 
                </Container>    
            </div> 

</div> 

        )
    }
}

export default Form;






