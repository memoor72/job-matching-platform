import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/apiService';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;

