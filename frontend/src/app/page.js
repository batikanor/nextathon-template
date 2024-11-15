"use client"
import { useEffect, useState } from 'react';

export default function Hello() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchMessage() {
      try {
        // Use localhost:5000 or backend:5000 depending on environment, this needs to be configured in the docker compose
        console.log(process.env.NEXT_PUBLIC_API_URL);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const response = await fetch(`${apiUrl}/api/hello`);
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    }

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>Message from Flask API:</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}