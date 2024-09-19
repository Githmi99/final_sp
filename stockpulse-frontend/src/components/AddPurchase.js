import React, { useState } from 'react';
import './AddPurchase.css';
import Header from './Header';
import { useAddPurchaseMutation } from '../services/api';

const AddPurchase = ({ onClose }) => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [paymentLinkOrShop, setPaymentLinkOrShop] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');
  const [addPurchase] = useAddPurchaseMutation();

  const handleAddPurchase = async (e) => {
    e.preventDefault();
  
    const newPurchase = {
      product,
      quantity: parseInt(quantity, 10),
      paymentLinkOrShop,
      cost: parseFloat(cost),
      date: new Date(date),
      status: 'Unpaid',
      // orderID could be generated here if needed
    };
  
    try {
      await addPurchase(newPurchase).unwrap();
      alert('Purchase added successfully!');
      onClose();
    } catch (error) {
      console.error('Failed to add purchase:', error.response ? error.response.data : error.message);
      alert('Failed to add purchase');
    }
  };
  

  return (
    <div className="add-purchase-container">
      <Header title="Purchase" titlePrefix="Add" />
      <form className="add-purchase-form" onSubmit={handleAddPurchase}>
        <div className="form-group">
          <label>Product:</label>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Link or Shop:</label>
          <input
            type="text"
            value={paymentLinkOrShop}
            onChange={(e) => setPaymentLinkOrShop(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Cost (Rs):</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date Required:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="actions">
          <button type="submit" className="add-btn">Add Purchase</button>
          <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddPurchase;
