import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import Header from './components/Header';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'; // import your Redux store

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
