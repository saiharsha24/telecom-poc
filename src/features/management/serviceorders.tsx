import React, { useState } from 'react';
import './serviceorders.module.css';
import styles from '../../components/Layout.module.css';

interface Order {
  id: number;
  description: string;
  status: string;
}

const ServiceOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, description: 'Install new cable connection', status: 'Pending' },
    { id: 2, description: 'Upgrade internet speed', status: 'In Progress' },
    {id: 3, description: 'Upgrade exisitng plan', status: 'Completed'},
  ]);

  const handleStatusChange = (orderId: number, newStatus: string) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <>
       <div className="cart-header-top">
        <h2>Service Orders</h2>
      </div>
    <div className={styles.App}>
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.description}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}

export default ServiceOrders;
