import React from 'react';
import Layout from "./components/Layout";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./components/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
