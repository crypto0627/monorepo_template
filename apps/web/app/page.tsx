"use client"
import { useState } from "react";

export default function Page(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [tokenId, setTokenId] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const userData = { name, tokenId };

    try {
      const response = await fetch('http://localhost:3001/addAssets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result:any = await response.json();

      setResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred.');
    }
  };

  return (
    <div>
      <h1>Add Token to backend</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="TokenId">TokenId:</label>
          <input
            type="text"
            id="tokenId"
            name="tokenId"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}
