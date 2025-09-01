import React, { useState } from "react";
import { saveUrl } from "../services/urlService";
import { Log } from "../utils/logger";

export default function UrlForm({ onAdd }) {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [validity, setValidity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!longUrl) {
      Log("frontend", "error", "component", "URL is required");
      return;
    }
    const urlObj = saveUrl(longUrl, shortCode, validity);
    Log("frontend", "info", "component", "URL saved");
    onAdd(urlObj);
    setLongUrl("");
    setShortCode("");
    setValidity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Custom shortcode (optional)"
        value={shortCode}
        onChange={(e) => setShortCode(e.target.value)}
      />
      <input
        type="number"
        placeholder="Validity (minutes)"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
}
