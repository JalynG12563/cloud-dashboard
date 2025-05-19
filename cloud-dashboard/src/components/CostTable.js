import React, { useEffect, useState } from "react";
import axios from "axios";

const CostTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/aws/costs")
      .then((res) => {
        console.log("✅ Data fetched:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching data:", err);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>AWS Cost Records</h2>

      <p>📦 Data length: {data.length}</p>

      {data.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={th}>Date</th>
              <th style={th}>Service</th>
              <th style={th}>Amount ($)</th>
              <th style={th}>Provider</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr key={entry._id}>
                <td style={td}>{entry.date}</td>
                <td style={td}>{entry.service}</td>
                <td style={td}>{entry.amount.toFixed(2)}</td>
                <td style={td}>{entry.provider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const th = {
  padding: "10px",
  border: "1px solid black",
  backgroundColor: "#f2f2f2",
  textAlign: "left"
};

const td = {
  padding: "10px",
  border: "1px solid black"
};

export default CostTable;
