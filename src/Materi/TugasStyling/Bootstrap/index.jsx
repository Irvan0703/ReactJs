import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form,   Nav, Navbar } from "react-bootstrap";
import './index.css'


export default class Bootstrap extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home" >Muhamad Irfanul Hadi</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#bio">Biografi</Nav.Link>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className="p-5 mb-4-bg-light rounded-3 jumbotron" id="jumbotron">
                    <div className="container-fluid py-5 text-center">
                        <p className="fs-5 fst-italic mt-5" id="hed"> IT Enthusiast</p>
                        <h1 className="display-4" id="he">Muhamad Irfanul Hadi</h1>
                        <button className="btn btn-warning border border-dark btn-sm mt-5 shadow-sm px-3 py-2">Profile</button>
                    </div>
                </div>
                <div className="container text-center" id="bio">
                    <h3 className="fs-bold fs-2">My Biografi</h3>
                    <p className="fs-6 fst-italic fw-light">Halo perkenalkan nama saya Irvan. Saya lahir di Malang, 4 November 1995. Saya tertarik pada perkembangan teknologi informasi yang berfokus pada Web Development.</p>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h5 className="fs-5">Admin Sparepart - PT Hartono Raya Motor Surabaya</h5>
                            <p className="fw-light">Saya bertugas untuk menginput sparepart yang dikirim dari vendor, stock opname sparepart serta mengirim sparepart yang diminta oleh kantor cabang.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h5 className="fs-5">Staff IT Koperasi Central Artha Niaga Jawa Timur</h5>
                            <p className="fw-light">Saya bertugas maintenance hardware serta modifikasi kode program web supaya tetap berjalan sesuai SOP</p>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 text-center">
                    <h3 className="fs-bold fs-2 text-center mb-3" id="contact">Contact Me</h3>
                    <div className="card mx-auto">
                    <div className="card-body">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <div className="d-grid gap-2">
                        <Button className="btn btn-dark border border-dark btn-sm mt-5 shadow-sm px-3 py-2" id="send">Send</Button>
                    </div>
                    </div>
                    </div>

                </div>
                <div>
                
                </div>
                <div className="container-fluid bg-dark mb-0 mt-5">
                    <footer>
                        <p className="text-white text-center footer">&copy;Eduwork 2022. All right reserved.</p>
                    </footer>
                </div>
            </div>
            
        );
    }
}
