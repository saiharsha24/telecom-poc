// components/SubscriptionHistory.tsx
import React, { useState, useEffect } from 'react';
import './subscriptions.module.css';
import styles from './subscriptions.module.css';

interface Subscription {
  id: number;
  packageName: string;
  startDate: string;
  endDate: string;
}

const SubscriptionHistory: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    { id: 1, packageName: 'Basic', startDate: '12-03-2023', endDate: '12-03-2024' },
    { id: 2, packageName: 'Prime', startDate: '09-06-2023', endDate: '09-06-2024' },
    { id: 3, packageName: 'Premium', startDate: '04-05-2023', endDate: '04-05-2024' },
    // Add more customer data as needed
  ]);

  // Assuming you have a function to fetch subscription data
  const fetchSubscriptionData = async () => {
    try {
      // Replace 'your-api-endpoint' with the actual API endpoint to fetch subscription data
      const response = await fetch('your-api-endpoint');
      const data: Subscription[] = await response.json();
      setSubscriptions(data);
    } catch (error) {
      //console.error('Error fetching subscription data', error);
    }
  };

  useEffect(() => {
    // Fetch subscription data when the component mounts
    fetchSubscriptionData();
  }, []);

  return (
    <>
      <div className="cart-header-top">
        <h2>Subscription History</h2>
      </div>
    <div className={styles.App}>
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Subscription ID</th>
            <th>Package Name</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <tr key={subscription.id}>
              <td>{subscription.id}</td>
              <td>{subscription.packageName}</td>
              <td>{subscription.startDate}</td>
              <td>{subscription.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};

export default SubscriptionHistory;
