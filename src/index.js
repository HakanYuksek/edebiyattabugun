import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "./static/css/NavigationBar.css"
import "./static/css/App.css"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
    <App />
  </BrowserRouter>,
);

// Eğer web performansını ölçmek isterseniz, bu fonksiyonu kullanabilirsiniz
reportWebVitals();
