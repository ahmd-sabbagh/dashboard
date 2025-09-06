import { useEffect, useRef } from "react";

type Callback = () => void;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  callback: Callback,
  extraRefs: React.RefObject<HTMLElement | null>[] = []
) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      const isOutsideMain = ref.current && !ref.current.contains(target);
      const isOutsideExtras = extraRefs.every(
        (extraRef) => extraRef.current && !extraRef.current.contains(target)
      );

      if (isOutsideMain && isOutsideExtras) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [callback, extraRefs]);

  return ref;
};
