import { useEffect } from "react";
import { Asset } from "expo-asset";

/**
 * Custom promise hook responsible for processing the promises array
 * @param promises
 * @param callback
 * @returns void
 */
const usePromiseAll = (
  promises: Promise<void | Asset[]>[],
  callback: () => void
) =>
  useEffect(() => {
    (async () => {
      await Promise.all(promises);

      callback();
    })();
  });

export default usePromiseAll;
