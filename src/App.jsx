import React, { useState } from 'react';
import { Textarea } from './components/Textarea';
import { Button } from './components/Button';
import { Result } from './components/Result';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEnhance = async () => {
    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_AI_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_AI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: inputText })
      });
      const data = await response.json();
      setResult(data[0]?.summary_text || 'No result');
    } catch (error) {
      setResult('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-20 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">TextCrafter AI</h1>
        <p className="text-lg text-gray-600 mb-6">
          Enhance your writing using the power of AI.
        </p>

        <Textarea value={inputText} onChange={e => setInputText(e.target.value)} />

        <Button onClick={handleEnhance} loading={loading}>Enhance Text</Button>

        {result && <Result text={result} />}
      </div>
    </div>
  );
}

export default App;
