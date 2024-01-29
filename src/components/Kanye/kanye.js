import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Kanye = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Make an API request when the component mounts
    const fetchKanyeQuote = async () => {
      try {
        const response = await axios.get('https://api.kanye.rest/');
        setQuote(response.data.quote);
      } catch (error) {
        console.error('Error fetching Kanye quote:', error);
      }
    };

    fetchKanyeQuote();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h2>Kanye Says:</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Kanye;
