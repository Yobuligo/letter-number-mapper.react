import { useMemo } from "react";
import * as appMeta from "../appMeta";

export const useAppMeta = () => {
  const app = useMemo(() => appMeta["app"], []);
  return app;
};
