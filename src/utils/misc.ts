function isServer() {
  return typeof document === 'undefined';
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { isServer, sleep };
