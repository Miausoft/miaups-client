import React from 'react';
import Carousel from '../components/Carousel';
import GoToOrderCreationCard from '../components/CreateOrder/GoToOrderCreationCard';
import TrackParcelCard from '../components/TrackParcelCard';
import { Card } from 'react-bootstrap';
import '../styles/pages/LandingPage.css';

function LandingPage() {
  return (
    <div id="page">
      <Carousel className=".carousel-layout" />
      <div>
        <div className="cards-flex">
          <div>
            <Card className="text-center card-layout">
              <Card.Img variant="top" src="deliver.jpg" className="image-proportion" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk the
                  content.
                </Card.Text>
                <GoToOrderCreationCard />
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="text-center  card-layout">
              <Card.Img variant="top" src="parcel.jpg" className="image-proportion" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk the
                  content.
                </Card.Text>
                <TrackParcelCard />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
