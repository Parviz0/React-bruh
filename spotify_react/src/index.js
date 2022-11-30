import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppCustom from './AppCustom';
import Layout from './Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <AppCustom/>
    </Layout>

    {/* <App /> */}
  </React.StrictMode>
);