// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CameraSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CameraSvgrepoCom1SvgIcon(props: CameraSvgrepoCom1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 351 351"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M330.857 79.261h-57.332l-19.127-39.89c-2-4.198-7.015-7.11-11.666-7.11H108.268c-4.651 0-9.666 2.912-11.664 7.109L77.475 79.261H20.143C9.114 79.261 0 88.254 0 99.282v162.526c0 11.028 9.114 20.452 20.143 20.452h102.616c19.116 22 47.483 36.479 79.099 36.479 31.616 0 59.983-14.479 79.098-36.479h49.902c11.028 0 20.143-9.424 20.143-20.452V99.282c-.001-11.028-9.115-20.021-20.144-20.021zM93 141.261a5 5 0 01-5 5H45a5 5 0 01-5-5v-22a5 5 0 015-5h43a5 5 0 015 5v22zm108.857 158.026c-47.026 0-85.144-38.119-85.144-85.145 0-47.027 38.118-85.146 85.144-85.146 47.024 0 85.144 38.119 85.144 85.146 0 47.026-38.119 85.145-85.144 85.145z"
        }
      ></path>

      <path
        d={
          "M201.857 152.018c-34.254 0-62.123 27.868-62.123 62.123 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-17.713 14.41-32.123 32.123-32.123 8.284 0 15-6.716 15-15 0-8.285-6.715-15-15-15z"
        }
      ></path>
    </svg>
  );
}

export default CameraSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
