function isServer() {
  return typeof document === 'undefined';
}

export { isServer };
