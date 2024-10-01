import { ReactNode } from "react";
import { IHaveClassName } from "../../../Types/IHaveClassName";

export interface ILinkProps extends IHaveClassName {
  children: ReactNode | ReactNode[];
  to: string;
  openInNewTab?: boolean;
}
