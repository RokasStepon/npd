import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Landing from './Landing';
import ThankYou from './ThankYou';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {


  return (
    <Router>
      <ScrollToTop>
        <Routes>
        <Route exact path="/" element={<Landing />}>
          </Route>
          <Route exact path="/thank-you" element={<ThankYou />}>
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
