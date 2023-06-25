import React from "react";
import product from './Components/product';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Price from "./Components/price.js";
import Description from "./Components/description.js";
import Image from "./Components/image.js";
import Card from 'react-bootstrap/Card';



const firstName = product.name;
function App() {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
       {firstName && (
        <Card.Img src={product.image} alt="Description de l'image" />
      )}
      <Card.Body>
        <Card.Title></Card.Title>
        
        <Card.Text>
        <Price product={product}/ >
      <Description product={product}/>
          <p>Hello, {firstName}!</p>
      
      {!firstName && <p>Hello, there!</p>}
        </Card.Text>
      </Card.Body>
    </Card>
      
      {/*
      <Price product={product}/ >
      <Description product={product}/>
      {firstName && <Image product={product}/>}
          <p>Hello, {firstName}!</p>
      
      {!firstName && <p>Hello, there!</p>}
      */}

      
    </div>
    

  );
}
export default App;
