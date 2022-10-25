export const requestTimeout = <T = unknown>(fn: T, interval: number): T => {
  let timer: NodeJS.Timeout;
  return Promise.race([fn, new Promise((_r, reject) => {
    timer = setTimeout(() => reject(new Error('Request timed out')), interval);
  }).finally(() => { clearTimeout(timer); }),
  ]) as T;
};
