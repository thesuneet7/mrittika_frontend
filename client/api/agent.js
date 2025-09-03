// api/agent.js

import fetch from 'node-fetch'; // Vercel's Node.js environment has fetch built-in, but this import ensures compatibility.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message } = req.body;
    
    // ⚠️ IMPORTANT: Replace this with your actual Render backend URL
    const renderBackendURL = "https://farming-1-7je0.onrender.com"; 

    // Forward the request to your Groq-powered backend
    const backendResponse = await fetch(`${renderBackendURL}/chat`, { // Assumes a /chat endpoint on your backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: message }),
    });

    const backendData = await backendResponse.json();

    // Send the response from your backend back to the frontend
    res.status(200).json({ reply: backendData.output || 'No response from backend' });

  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}