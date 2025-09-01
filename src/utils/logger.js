export function Log(stack, level, pkg, message) {
  // For demo: just print (would normally POST to API)
  console.log(`[${stack.toUpperCase()}] [${level}] [${pkg}] ${message}`);
}
