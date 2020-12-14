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




{/* <html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <title>Login - Brand</title>
 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
</head>

<body class="bg-gradient-primary">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-12 col-xl-10">
                <div class="card shadow-lg o-hidden border-0 my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-flex">
                                <div class="flex-grow-1 bg-login-image" style="background-image: url('../');"></div>
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h4 class="text-dark mb-4">Ajout Musique</h4>
                                    </div>
                                    <form class="user">
                                        <div class="form-group" id="qu1_titre" type="text" >
                                        <input type="text" name="artiste" onChange={this.handeChange } value={this.state.titre} class="form-control" />
                                        </div>
                                        <div class="form-group"><input type="text" class="form-control" /></div><select class="form-control"><optgroup label="This is a group"><option value="12" selected>This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select>
                                        <div
                                            class="form-group"><input class="form-control" type="date" /></div><input type="number" class="form-control" /><select class="form-control"><optgroup label="This is a group"><option value="12" selected>This is item 1</option><option value="13">This is item 2</option><option value="14">This is item 3</option></optgroup></select><input
                                    type="url" class="form-control" />
                                <hr /><button class="btn btn-primary btn-block text-white btn-user" type="submit">Valider</button>
                                <hr />
                                </form>
                                <div class="text-center"></div>
                                <div class="text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</body>

</html>

 */}