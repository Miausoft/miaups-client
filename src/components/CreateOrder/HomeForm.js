import React from 'react';
import { Form } from 'react-bootstrap';

function HomeForm({ onChange, address }) {
  return (
    <div>
      <Form.Label>Post Code</Form.Label>
      <Form.Control
        onChange={onChange}
        type="number"
        required
        placeholder="Enter post code"
        name="postCode"
        value={address?.postCode}
      />
      <Form.Label>City</Form.Label>
      <Form.Control
        onChange={onChange}
        type="text"
        required
        placeholder="Enter city name"
        name="townName"
        value={address?.townName}
      />
      <Form.Label>Street Name</Form.Label>
      <Form.Control
        onChange={onChange}
        type="text"
        required
        placeholder={'Enter street name'}
        name="streetName"
        value={address?.streetName}
      />
      <Form.Label>Building Number</Form.Label>
      <Form.Control
        onChange={onChange}
        type="number"
        required
        name="buildingNumber"
        value={address?.buildingNumber}
      />
    </div>
  );
}

export default HomeForm;
