import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page1 from './Pages/Page1';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Page2 from './Pages/Page2';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Page1 /> },
    { path: "page2", element: <Page2 /> },
  ]);
  return routes;
};

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/game-of-tic-tac-toe">
      <App />  
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();