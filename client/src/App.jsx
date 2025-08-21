import { useState } from "react";

export default function Home() {
  const [scene, setScene] = useState("");
  const [panels, setPanels] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "https://webtoon-backend-8laj.onrender.com";

  const generatePanels = async () => {
    if (!scene.trim()) return; // prevent empty input
    setLoading(true);
    setPanels([]);

    try {
      const res = await fetch(
        `${API_BASE_URL}/generate?scene=${encodeURIComponent(scene)}`
      );
      const data = await res.json();

      if (data.panels) {
        setPanels(data.panels);
      } else {
        alert("No panels returned. Try again!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong while generating panels.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">AI Webtoon Generator</h1>

      <input
        type="text"
        value={scene}
        onChange={(e) => setScene(e.target.value)}
        placeholder="Enter a scene description..."
        className="p-2 border rounded w-80 mb-4"
      />

      <button
        onClick={generatePanels}
        className={`px-4 py-2 rounded text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Panels"}
      </button>

      <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-3xl">
        {panels.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Panel ${i + 1}`}
            className="rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}
