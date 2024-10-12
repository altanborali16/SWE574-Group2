import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppProvidersWrapper from "./Components/Wrappers/AppProvidersWrapper";
import ErrorBoundary from "./Components/Wrappers/ErrorBoundary";
import AppRouter from "./AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";

// configureFakeBackend();

function App() {
  return (
    <Router>
      <AppProvidersWrapper>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </AppProvidersWrapper>
    </Router>
  );
}

export default App;
