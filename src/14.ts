import { useState } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get("https://api.example.com/data");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;