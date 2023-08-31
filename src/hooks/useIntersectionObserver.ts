import { useEffect, useRef } from 'react';

interface useIntersectionObserverProps {
  callback: () => void;
  options?: IntersectionObserverInit;
}

export const useIntersectionObserver = ({ callback, options }: useIntersectionObserverProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const target = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    if (target.current) {
      observer.current = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      }, options);
      observer.current.observe(target.current);
    }
  }, [callback]);
  return target;
};
