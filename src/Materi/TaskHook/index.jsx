import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import ComponentHook from './ComponentHook';

const TaskHook = () => {

    const [value,setValue] = useState({
        search: '',
        status: ''
    });
    
    return (
        <div className='main'>
            <div > 
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br/>
            </div>
            <div className="justify-content-center" style={{width: '90%'}}>
                <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={e => setValue({
                            search: e.target.value,
                            status:''
                        })}
                        />
                    <Button variant="outline-success" value={'submit'} onClick={
                        e => setValue({
                            search: value.search,
                            status: e.target.value
                        })
                    } >Search</Button>
                </Form>
            </div>
            <br/>
            <ComponentHook send={value}/>
        </div>
    )
}

export default TaskHook;