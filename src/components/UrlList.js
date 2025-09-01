import React from "react";

export default function UrlList({ urls }) {
  return (
    <ul>
      {urls.map((u) => (
        <li key={u.shortCode}>
          {u.longUrl} →{" "}
          <a href={`/${u.shortCode}`} target="_blank" rel="noreferrer">
            {window.location.origin}/{u.shortCode}
          </a>{" "}
          (valid till {new Date(u.expiry).toLocaleTimeString()})
        </li>
      ))}
    </ul>
  );
}
