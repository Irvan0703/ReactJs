import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ComponentHook = (props) =>{

    const [news,setNews] = useState([]);

    useEffect(() =>{
        if(props.send.status === 'submit' && props.send.search !== ''){
            axios
            .get(`https://newsapi.org/v2/top-headlines?country=id&q=${props.send.search}&apiKey=86f0ca9287334d49a73fdd224f211898`)
            .then((data) => {
                setNews(data.data.articles);
            })
            .catch(error => console.log(error));
        } else {
            axios
            .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=86f0ca9287334d49a73fdd224f211898")
            .then((data) => {
                setNews(data.data.articles);
            })
            .catch(error => console.log(error));
        }
       
    },[props.send.status,props.send.search])

    const tanggal = (data) =>{
        var ts = new Date(data);
        let tanggal = ts.toLocaleDateString();
        let jam = ts.toLocaleTimeString('en-GB');
        return tanggal+" "+jam;
    }
   
    return(
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {news.map((msg,i) => 
                <Col key={i} >
                <Card style={{ width: '18rem' }} >
                   <Card.Img variant="top" src={msg.urlToImage} />
                   <Card.Body>
                       <Card.Title>{msg.title}</Card.Title>
                       <Card.Subtitle className="mb-2 text-muted">{msg.author} - {tanggal(msg.publishedAt)}</Card.Subtitle>
                       <Card.Text>
                           {msg.description}
                       </Card.Text>
                       <Button variant="primary" href={msg.url} target="_blank">Read More</Button>
                   </Card.Body>
                </Card>
                </Col>
                )}
            </Row>
            
        </div>
    )
}

export default ComponentHook;