import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imge from '../images/imge.jpeg';
import imge1 from '../images/imge1.jpeg';
import imge2 from '../images/imge2.jpeg';
import mombaby from '../images/momandbaby.jpeg';
import packag from '../images/package.jpg';
import post1 from '../images/Postpartum.jpeg';
import post2 from '../images/depression.jpeg';
import Cards from './Cards';
import Unique from './Unique';
import Speciality from './Speciality';

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const cardData = [
    { title: 'Our Services', content: 'Our Services', imageUrl: mombaby },
    { title: 'Package Details', content: 'Package Details', imageUrl: packag },
  ];

  const firstSectionContent = [
    "At Ayurcare, we blend ancient wisdom with modern science to provide holistic healthcare solutions.",
    "Our unique approach focuses on treating the root causes of health issues rather than just the symptoms.",
    "We pride ourselves on our personalized treatment plans that are tailored to each individual's unique constitution, lifestyle, and health goals."
  ];

  // Container style for horizontal alignment of cards
  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',  // Space between cards
    gap: '70px',
    marginTop: '70px',  // Space between the carousel and cards
    flexWrap: 'wrap',    // Ensures cards wrap on smaller screens
  };

  return (
    <>
      <div style={{ marginTop: '125px' }}> {/* Adjust this value if needed */}
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={3000}
          className="w-100"
        >
          <Carousel.Item>
            <img
              src={imge}
              alt="First slide"
              className="d-block w-100 img-fluid"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '50px',
                borderRadius: '5px',
              }}
            >
              <h3 style={{ fontSize: '2rem' }}>First slide label</h3>
              <p style={{ fontSize: '1.2rem' }}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imge1}
              alt="Second slide"
              className="d-block w-100 img-fluid"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '5px',
              }}
            >
              <h3 style={{ fontSize: '2rem' }}>Second slide label</h3>
              <p style={{ fontSize: '1.2rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imge2}
              alt="Third slide"
              className="d-block w-100 img-fluid"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '5px',
              }}
            >
              <h3 style={{ fontSize: '2rem' }}>Third slide label</h3>
              <p style={{ fontSize: '1.2rem' }}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div style={cardContainerStyle}>
          {cardData.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>

        <div>
          <Unique 
            titles="What Makes Ayurcare Unique?" 
            content={firstSectionContent.length > 0 ? firstSectionContent : []} 
          />
        </div>
      </div>

      <div style={{ backgroundColor:"#00000" }}>
        <div>Why Choose Our Services?</div>
        <div style={{ backgroundColor: '#DCDCDC', color: '#000' }}>
          <Speciality 
            title="Understanding Postpartum Treatment"
            description="Postpartum treatment is crucial for new mothers to recover physically and emotionally after childbirth. It includes medical check-ups, mental health support, and physical therapy to ensure a healthy transition into motherhood."
            imgSrc={post1}
            imgAlt="Postpartum treatment"
            reverse={false}
          />
        </div>
        <div style={{ backgroundColor: '#000', color: '#FFF' }}>
       <Speciality 
       title=" Postpartum Depression"
        description="Postpartum treatment is crucial for new mothers to recover physically and emotionally after childbirth. It includes medical check-ups, mental health support, and physical therapy to ensure a healthy transition into motherhood."
       imgSrc={post2}
        imgAlt="Postpartum treatment"
        reverse={true}
  />
</div>

       
      </div>
    </>
  );
}

export default Hero;
