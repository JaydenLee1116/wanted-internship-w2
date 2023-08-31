interface ThrottleParams {
  callback: () => void;
  delay: number;
}

let throttled = false;
export const throttle = ({ callback, delay }: ThrottleParams) => {
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
