import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";


export default class Validation extends React.Component{

    state={
        errors:[]
    }

    handleSubmit = () =>{
        const {firstName, lastName, major, gender, address, email, password, agreement} = this.props.controlValue;
        let message = [];
       const re = /\S+@\S+\.\S+/;
    
        if(firstName.length === 0){
            message = [...message, 'First Name cannot be empty']
        }
        if(lastName.length === 0){
            message = [...message, 'Last Name cannot be empty']
        }
        if(major === '' || major === 'Choose Major'){
            message = [...message, 'Major cannot be empty']
        }
        if(gender === '' || gender === 'Choose Gender'){
            message = [...message, 'Gender cannot be empty']
        }
        if(address.length === 0){
            message = [...message, 'Address cannot be empty']
        }
        if(email.length === 0){
            message = [...message, 'Email cannot be empty']
        } else if(!re.test(String(email).toLowerCase())){
            message = [...message, 'Email not valid']
        }
         
        if(password.length === 0){
            message = [...message, 'Password cannot be empty']
        } else if (password.length < 6){
            message = [...message, 'The password must be at least 6 characters']
        }
        if(agreement.length === 0){
            message = [...message, 'Agreement cannot be empty']
        }

        if(message.length > 0){
            this.setState({
                errors:message
            }, () => this.props.handleErrors(this.state));
        } else {
            alert(`
            First Name = ${firstName}
            Last Name  = ${lastName}
            Major      = ${major}
            Gender     = ${gender}
            Address    = ${address}
            Email      = ${email}
            Password   = ${password}
            `);
            this.setState({
                errors: []
            })
        }

    }
    
    render() {
        return(
            <div className="d-flex justify-content-center">
                <div className="d-grid gap-2">
                        <Button name="register" variant="primary" size="lg" 
                        onClick={e => this.handleSubmit()}>
                            Register
                        </Button>
                </div>                                   
            </div>
        )
    }
}
