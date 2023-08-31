interface ThrottleParams {
  callback: () => void;
  delay: number;
}

export const throttle = ({ callback, delay }: ThrottleParams) => {
  let throttled = false;
  return () => {
    if (!throttled) {
      callback();
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, delay);
    }
  };
};
