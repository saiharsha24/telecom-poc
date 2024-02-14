import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./dashboard.module.css";
function Dashboard() {
  const location = useLocation();
  const { state } = location;
  const [data, setData] = useState({});
  useEffect(() => {
    let json = state;
    setData(json);
  }, [data])

  return (
    <div className={styles.dashboardheader}>
    <h1>Thank You !!</h1>
  </div>
  );
}

export default Dashboard;