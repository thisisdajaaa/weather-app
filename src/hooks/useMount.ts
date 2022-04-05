import { useEffect } from "react";

/**
 * Custom effect hook responsible for triggering callback
 * on initial mount
 * @param callback
 * @returns void
 */
const useMount = (callback: () => void) => {
  useEffect(callback, []);
};

export default useMount;
