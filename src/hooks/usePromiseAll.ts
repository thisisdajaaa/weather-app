import { useEffect } from "react";
import { Asset } from "expo-asset";

const usePromiseAll = (promises: Promise<void | Asset[]>[], cb: () => void) =>
  useEffect(() => {
    (async () => {
      await Promise.all(promises);

      cb();
    })();
  });

export default usePromiseAll;
