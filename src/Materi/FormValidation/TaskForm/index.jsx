import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card, FloatingLabel, Form } from "react-bootstrap";


export default class TaskForm extends React.Component{

    state = {
        firstName: '',
        lastName: '',
        major: '',
        gender: '',
        address: '',
        email: '',
        password: '',
        agreement:  false
    }

    render(){
        return(
            <div className="d-flex justify-content-center">
                <Card style={{ width: '90%' }}>
                    <Card.Body>
                        <FloatingLabel
                        controlId="floatingInputFirstName"
                        label="First Name"
                        className="mb-3"
                    >
                            <Form.Control name="firstName" type="text" placeholder="First Name"  
                            onChange={e =>  this.setState({firstName: e.target.value},() => this.props.receiveValue(this.state))}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInputLastName" label="Last Name">
                            <Form.Control name="lastName" type="text" placeholder="Last Name" 
                             onChange={e =>  this.setState({lastName: e.target.value}, () => this.props.receiveValue(this.state))}/>
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingSelectMajor" label="Major" >
                            <Form.Select name="major" aria-label="Floating label select example"
                             onChange={e =>  this.setState({major: e.target.value}, () => this.props.receiveValue(this.state))}>
                                <option>Choose Major</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Informatic Engineering">Informatic Engineering</option>
                                <option value="Information System">Information System</option>
                            </Form.Select>
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingSelectGender" label="Gender">
                            <Form.Select name="gender" aria-label="Floating label select example"
                             onChange={e =>  this.setState({gender: e.target.value}, () => this.props.receiveValue(this.state))}>
                                <option>Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingTextarea2" label="Address">
                            <Form.Control
                            name="address"
                            as="textarea"
                            placeholder="Address . . ."
                            style={{ height: '100px' }}
                            onChange={e =>  this.setState({address: e.target.value}, () => this.props.receiveValue(this.state))}
                            />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel
                        controlId="floatingInputEmail"
                        label="Email address"
                        className="mb-3"
                        >
                            <Form.Control name="email" type="email" placeholder="name@example.com" 
                             onChange={e =>  this.setState({email: e.target.value}, () => this.props.receiveValue(this.state))}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control name="password" type="password" placeholder="Password" 
                             onChange={e =>  this.setState({password: e.target.value}, () => this.props.receiveValue(this.state))}/>
                        </FloatingLabel>
                        <br/>
                        <input name="agreement" type="checkbox" value={true}
                        onClick={e =>  this.setState({agreement: e.target.checked}, () => this.props.receiveValue(this.state))}></input>
                        <label className="form-check-label">
                            I agree all statements in <a href="#!">Terms of service</a>
                        </label>                   
                    </Card.Body>
                </Card>
                

            </div>
        )
    }
}