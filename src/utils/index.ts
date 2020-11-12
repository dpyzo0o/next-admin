function isServer() {
  return typeof document === 'undefined';
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { isServer, delay };
