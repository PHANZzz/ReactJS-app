import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://crud-deployments.vercel.app/api/list')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.email}</td>
              <td className="border border-gray-300 px-4 py-2">{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
