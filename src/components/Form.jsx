import React, { useState } from 'react';
import Button from './Button';
import '../App.css';

function Form() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePriceChange = (e) => {
    const value = e.target.value;
    const numericValue = Number(value.replaceAll(',', ''));
    //replaceAll(pattern, replacement)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

    if (!isNaN(numericValue)) {
      setPrice(numericValue.toLocaleString('en-US'));
      //from blog, without using regex, number/currency formater
      //https://typeofnan.dev/how-to-add-thousandths-place-comma-every-three-digits-in-javascript/
    }
  };
  const handleSave = () => {
    // Check if both name and price are filled
    if (!name || !price) {
      alert("Please enter both name and price.");
      return;
    }

    // Remove comma
    const priceWithoutCommas = price.split(',').join('');
    alert(JSON.stringify({ name, price: priceWithoutCommas }));
  };

  return (
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <label>
        Name
        <input 
          type="text" 
          value={name} 
          onChange={handleNameChange} 
        />
      </label>
      <label>
        Price
        <input 
          type="text" 
          value={price} 
          onChange={handlePriceChange} 
        />
      </label>
      <Button size="medium" backgroundColor="cyan" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}

export default Form;
