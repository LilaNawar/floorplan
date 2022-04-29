import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const post = {
  title: "SEI - 48 is awesome",
  authors: ["Saad Iqbal", "Dylan Kotzer", "Martin Nicola"],
  body: "Checkout this SEI-48 cohort",
  comments: [
    "First",
    "Great Post",
    "Hire this author now",
  ]
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App post={post} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
