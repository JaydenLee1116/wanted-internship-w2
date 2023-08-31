import { useEffect, useRef } from 'react';
// import { usePageNumberStore } from './useStore';

interface useIntersectionObserverProps {
  callback: () => void;
  options?: IntersectionObserverInit;
}

export const useIntersectionObserver = ({ callback, options }: useIntersectionObserverProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const target = useRef<HTMLDivElement | null>(null);
  // const { pageNumber } = usePageNumberStore();
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
  }, [target]);
  return target;
};
