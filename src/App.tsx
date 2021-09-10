import React from "react";
import { useSelector  } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import Routes from './routes/route';
import Loading from './ui/shared-component/loading/loading';


function App() {
  const loadingState = useSelector((state: any) => state.loading);

  return (
    <React.Suspense fallback={false}>
      <Router>
        <div className="app-container flex">
          {loadingState && <Loading /> }
          <Routes />
        </div>
      </Router>
    </React.Suspense>
  );
}

export default App;
