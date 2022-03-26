import React from "react";
import { Card } from "react-bootstrap";
import TaskForm from "./TaskForm";
import Validation from "./Validation";


export default class FormValidation extends React.Component{

    state = {
        firstName: '',
        lastName: '',
        major: '',
        gender: '',
        address: '',
        email: '',
        password: '',
        agreement:  false,
        errors:[]
    }
    handleValue = (data) => {
        this.setState({firstName: data.firstName, lastName:data.lastName, major: data.major, gender: data.gender, address: data.address, email: data.email, password: data.password, agreement: data.agreement})
    }
    showErrors = (data) => {
        this.setState({errors:data.errors});
    }
    
    render(){
        
        return (
            <div className="d-flex content-center">
                <Card border="primary" style={{ width: '90%' }}>
                    <Card.Header>Registration Form</Card.Header>
                    <Card.Body>
                        <TaskForm receiveValue={this.handleValue}/>
                    </Card.Body>
                    {
                        this.state.errors  && <ul style={{color: 'red'}}>
                        {
                            this.state.errors.map((message, i) => <li key={i}>{message}</li>)
                        }
                    </ul>

                    }
                    
                    <br/>
                    <Validation controlValue={this.state} handleErrors={this.showErrors}/>                   
                </Card>   
                         
            </div>
        )
    }
}