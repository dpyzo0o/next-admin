function isServer() {
  return typeof document === 'undefined';
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function assert(value: boolean, message?: string): asserts value;
function assert<T>(value: T | null | undefined, message?: string): asserts value is T;
function assert(value: any, message?: string) {
  if (value === false || value === null || typeof value === 'undefined') {
    throw new Error(message || 'Assertion failed');
  }
}

export { isServer, sleep, assert };
