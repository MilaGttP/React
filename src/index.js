import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App header="Header" author="Author" 
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla purus, pharetra at metus sit amet, tempus condimentum augue. Nunc mauris mauris, semper id dui vel, lacinia imperdiet neque." />
    {/* <App/> варіант без параметрів */}
  </React.StrictMode>
);