import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CreateOffer() {
  const [offer, setOffer] = useState({
    offer_id: '',
    offer_title: '',
    offer_description: '',
    offer_image: '',
    offer_sort_order: 0,
    content: [],
    schedule: {
      days_of_week: [],
      dates_of_month: [],
      months_of_year: []
    },
    target: '',
    pricing: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOffer((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the offer data to the server here
    console.log("line 32 handle ");
  };

  return (
    <Form onSubmit={handleSubmit} id ='offer-creation'>
      <Form.Group controlId="offerId">
        <Form.Label>Offer ID:</Form.Label>
        <Form.Control type="text" name="offer_id" value={offer.offer_id} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group controlId="offerTitle">
        <Form.Label>Offer Title:</Form.Label>
        <Form.Control type="text" name="offer_title" value={offer.offer_title} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group controlId="offerDescription">
        <Form.Label>Offer Description:</Form.Label>
        <Form.Control type="text" name="offer_description" value={offer.offer_description} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group controlId="offerImage">
        <Form.Label>Offer Image:</Form.Label>
        <Form.Control type="file" name="offer_image" value={offer.offer_image} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group controlId="offerContent">
        <Form.Label>Content:</Form.Label>
        <Form.Control type="text" name="content" value={offer.content} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group controlId="offerPricing">
        <Form.Label>Pricing:</Form.Label>
        <Form.Control type="text" name="pricing" value={offer.pricing} onChange={handleInputChange} />
      </Form.Group>

      <Button variant="primary" type="submit">Create Offer</Button>
    </Form>
  );
}

export default CreateOffer;
