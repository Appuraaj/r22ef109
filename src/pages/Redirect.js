import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findUrl } from "../services/urlService";
import { Log } from "../utils/logger";

export default function RedirectPage() {
  const { shortCode } = useParams();

  useEffect(() => {
    const urlObj = findUrl(shortCode);
    if (urlObj) {
      Log("frontend", "info", "page", `Redirecting to ${urlObj.longUrl}`);
      window.location.href = urlObj.longUrl;
    } else {
      Log("frontend", "error", "page", "Invalid or expired link");
      alert("Invalid or expired link!");
    }
  }, [shortCode]);

  return <p>Redirecting...</p>;
}
