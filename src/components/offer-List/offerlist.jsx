import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigation = useNavigate();

  const [fetcheddata, setfetcheddata] = useState([]);
  useEffect(() => {
    const url = "http://localhost:8000/offers-list";

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    };

    fetch(url, options)
      .then((response) => {
        if (!response.status) {
          throw new Error("Network response was not successfull");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          setfetcheddata(data.data)
          console.log(data.data);
        } else {
          console.log(data.message);
        }

      })
      .catch((error) => {
        console.error("Internal Server Error Please try after some time", error);
      });
  }, [])

  const deleteOffer = (id) => {
    const url = `http://localhost:8000/offers/${id}`;

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },

    };

    fetch(url, options)
      .then((response) => {
        if (!response.status) {
          throw new Error("Network response was not successfull");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
             console.log(data);
        } else {
          console.log(data.message);
        }

      })
      .catch((error) => {
        console.error("Internal Server Error Please try after some time", error);
      });
      window.location.reload(false);
  
  }
  const updateOffer=(id)=>{
    console.log(id) ;
    navigation('/create-offer'); 
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigation('/')}>Home</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link onClick={() => navigation('/about')}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section >
        <Button variant="secondary" size="lg" id="offer-heading" onClick={()=> navigation('/create-offer')} > Create New Offer </Button>
      </section>
      {
        fetcheddata.map((data) => {
          return (
            <div>
              <Container>
                <Row>
                  <Col xs={12} md={6}>
                    <Image src="images\DALLEcopy.webp" fluid />
                  </Col>
                  <Col xs={12} md={6}>
                    <h3>{data.offer_title}</h3>
                    <p>{data.offer_description}</p>
                    <h4>Contents:</h4>
                    <ul>
                      {data.content.map((item) => (
                        <li key={item.item_id}>
                          {item.quantity} x {item.item_id}
                        </li>
                      ))}
                    </ul>
                    <h4>Pricing:</h4>
                    <ul>
                      {data.pricing.map((option, index) => (
                        <li key={index}>
                          {option.cost} {option.currency}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline-primary" onClick={() => { deleteOffer(data._id) }} > Delete Offer </Button>
                    <Button variant="outline-primary" onClick={ ()=> { updateOffer(data._id) } } > Edit offer</Button>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        })
      }
    </>
  )
}
export default List;