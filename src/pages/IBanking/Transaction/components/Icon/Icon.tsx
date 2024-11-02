

import arrowDown from "../../../../../assets/ic_arrow-down-in.svg"
import arrowUp from "../../../../../assets/ic_arrow-up-out.svg"
import arrowReturn from "../../../../../assets/ic_arrow-return.svg"
import { IIconProps } from "./Icon.types";

export const Icon = ({ entry }: IIconProps) => {
  if (entry === "DEBIT") {
    return <span><img src={arrowUp}/></span>;
  }

  if (entry === "CREDIT") {
    return <span><img src={arrowDown}/></span>;
  }

  return <span><img src={arrowReturn}/></span>;
};
