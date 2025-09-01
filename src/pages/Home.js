import React, { useState, useEffect } from "react";
import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";
import { getAllUrls } from "../services/urlService";

export default function Home() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    setUrls(getAllUrls());
  }, []);

  const handleAdd = () => {
    setUrls(getAllUrls());
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <UrlForm onAdd={handleAdd} />
      <UrlList urls={urls} />
    </div>
  );
}
