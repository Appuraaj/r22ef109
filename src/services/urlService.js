function generateShortCode(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export function saveUrl(longUrl, customCode, validity) {
  const urls = JSON.parse(localStorage.getItem("urls") || "[]");
  let shortCode = customCode || generateShortCode();
  if (urls.find((u) => u.shortCode === shortCode)) {
    shortCode = generateShortCode();
  }
  const expiry =
    Date.now() + (parseInt(validity) || 30) * 60 * 1000; // default 30 min
  const urlObj = { longUrl, shortCode, expiry };
  urls.push(urlObj);
  localStorage.setItem("urls", JSON.stringify(urls));
  return urlObj;
}

export function getAllUrls() {
  return JSON.parse(localStorage.getItem("urls") || "[]");
}

export function findUrl(shortCode) {
  const urls = getAllUrls();
  const urlObj = urls.find((u) => u.shortCode === shortCode);
  if (urlObj && Date.now() < urlObj.expiry) {
    return urlObj;
  }
  return null;
}
