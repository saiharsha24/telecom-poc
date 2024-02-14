import React, { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className={styles.App}>
      {
        (() => {
          switch (currentPath) {
            case '/management':
            case '/management/':
            case '/management/payments':
            case '/management/serviceorders':
            case '/management/subscriptions':
            case '/management/customerprofiles':
              return null;
            default:
              return <Header />;
          }
        })()
      }      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
