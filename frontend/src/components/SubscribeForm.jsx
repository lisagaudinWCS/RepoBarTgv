import axios from "axios";
import { useState } from "react";

export default function SubscribeForm() {
  const [simpson, setSimpson] = useState("");
  console.warn(simpson);
  const createClient = () => {
    // Send the request
    axios
      .get("http://localhost:5000/clients/")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data);
      });
  };

  return (
    <button type="button" onClick={createClient}>
      Get simpson
    </button>
  );
}
