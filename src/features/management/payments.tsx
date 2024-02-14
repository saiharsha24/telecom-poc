// components/Payments.tsx
import React, { useState, FormEvent } from 'react';
import styles from './payment.module.css';

const Payments: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('credit_card');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Your payment processing logic goes here
    console.log(`Processing payment of ${amount} via ${paymentMethod}`);
    
    // You might want to integrate with a payment gateway API at this point

    // Reset form after payment processing
    setAmount('');
    setPaymentMethod('credit_card');
  };

  return (
    <>
    <div className="cart-header-top">
      <h2 className={styles.paymentHeader}>Payments</h2>
    </div>
    <div className={styles.paymentContainer}>
      <form className={styles.paymentForm} onSubmit={handlePaymentSubmit}>
        <p>
          Amount:
        </p>
          <input className={styles.paymentInput} type="text" value={amount} onChange={handleAmountChange} />
        <br />
        <p>
          Payment Method:
        </p>
          <select className={styles.paymentSelect} value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            {/* Add other payment methods as needed */}
          </select>
        <br />
        <button className={styles.paymentButton} type="submit">Submit Payment</button>
      </form>
    </div>
    </>

  );
};

export default Payments;
