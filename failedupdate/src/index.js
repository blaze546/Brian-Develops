import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from './reportWebVitals';

const Root = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');

const renderRoot = () => {
  ReactDOM.createRoot(rootElement).render(<Root />);
};
//
//if (module.hot) {
 // module.hot.accept('./Root', () => {
    //renderRoot();
 // });//
//}//

renderRoot();

//reportWebVitals();



