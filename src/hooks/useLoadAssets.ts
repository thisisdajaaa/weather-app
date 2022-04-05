import { useState } from "react";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

import usePromiseAll from "./usePromiseAll";

type FontSource = Parameters<typeof Font.loadAsync>[0];

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
  const [ready, setReady] = useState(false);

  usePromiseAll(
    [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],

    () => setReady(true)
  );

  return ready;
};

export default useLoadAssets;
