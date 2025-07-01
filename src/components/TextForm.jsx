import React, { useState } from "react";

const TextForm = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (type) => {
    setLoading(true);
    try {
      const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: input }),
      });
      const data = await response.json();
      setOutput(data[0]?.summary_text || "No output");
    } catch (error) {
      setOutput("Error processing the request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-xl shadow">
      <textarea
        className="w-full p-3 border rounded"
        rows="5"
        placeholder="Enter your text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div className="mt-4 flex gap-2">
        <button onClick={() => handleSubmit("summarize")} className="bg-blue-500 text-white px-4 py-2 rounded">Summarize</button>
        {/* Add more buttons for rephrase, grammar, etc. */}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Output:</h3>
        <p className="p-2 bg-gray-100 rounded">{loading ? "Loading..." : output}</p>
      </div>
    </div>
  );
};

export default TextForm;
