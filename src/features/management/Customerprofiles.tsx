
import React, { useState, useEffect } from 'react';
import styles from './customerprofiles.module.css';
import Header from '../../components/Header';
interface Customer {
  id: number;
  name: string;
  email: string;
  address: string;
}

const CustomerProfiles: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', address: '123 Main St' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', address: '456 Oak St' },
    // Add more customer data as needed
  ]);

  useEffect(() => {
    // Fetch customer data from an API and update the state
    // Example: fetch('/api/customers').then(response => response.json()).then(data => setCustomers(data));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      
      <div className="cart-header-top">
        <h2>Customer Profiles</h2>
      </div>
      <div className={styles.App}>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CustomerProfiles;
