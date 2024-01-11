import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component

const Root = () => {
  return (
    <ErrorBoundary>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ErrorBoundary>
  );
};

const rootElement = document.getElementById('root');

const renderRoot = () => {
  ReactDOM.createRoot(rootElement).render(<Root />);
};

if (module.hot) {
  module.hot.accept('./Root', () => {
    // This block is optional and handles hot module replacement (HMR) for development
    renderRoot();
  });
}


renderRoot();

reportWebVitals();



