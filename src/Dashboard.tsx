// src/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [versions, setVersions] = useState({
    react: '',
    angular: '',
    vue: ''
  });

  useEffect(() => {
    // Fetch React version
    axios.get('http://localhost:4000/api/react')
      .then(response => {
        setVersions((prev) => ({ ...prev, react: response.data.version }));
      })
      .catch(error => console.error('Error fetching React version:', error));

    // Fetch Angular.js version
    axios.get('http://localhost:4000/api/angular')
      .then(response => {
        setVersions((prev) => ({ ...prev, angular: response.data.version }));
      })
      .catch(error => console.error('Error fetching Angular.js version:', error));

    // Fetch Vue.js version
    axios.get('http://localhost:4000/api/vue')
      .then(response => {
        setVersions((prev) => ({ ...prev, vue: response.data.version }));
      })
      .catch(error => console.error('Error fetching Vue.js version:', error));
  }, []);

  return (
    <div>
      <h1>Latest Versions</h1>
      <div>
        <h2>React: {versions.react}</h2>
        <h2>Angular.js: {versions.angular}</h2>
        <h2>Vue.js: {versions.vue}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
