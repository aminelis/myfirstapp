import React from "react";
import product from './product.js';
import productImage from './images/prod.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const firstName = product.name;
function App() {
  return (
    <div>
       
    

    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {firstName && (
        <div>
          <img src={productImage} alt="Product" className="prod" />
          <p>Hello, {firstName}!</p>
        </div>
      )}
      {!firstName && <p>Hello, there!</p>}
      
    </div>
    </div>
  );
}
export default App;
