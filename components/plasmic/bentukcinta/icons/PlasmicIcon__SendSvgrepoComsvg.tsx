// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SendSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SendSvgrepoComsvgIcon(props: SendSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 511.999 511.999"}
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
          "M480.73 113.073H132.684c-10.034 0-18.974 4.757-24.7 12.127l171.51 125.853c16.022 11.757 38.401 11.757 54.424 0L505.43 125.201c-5.725-7.372-14.666-12.128-24.7-12.128z"
        }
      ></path>

      <path
        d={
          "M347.428 269.466c-11.987 8.795-26.357 13.196-40.722 13.196-14.369 0-28.733-4.398-40.722-13.196l-164.57-120.761v162.321H65.74c-9.459 0-17.127 7.669-17.127 17.127 0 9.459 7.669 17.127 17.127 17.127h35.674v22.374c0 17.243 14.027 31.27 31.27 31.27h348.045c17.243 0 31.27-14.029 31.27-31.27v-218.95L347.428 269.466z"
        }
      ></path>

      <path
        d={
          "M78.577 251.539c-3.139-3.559-7.72-5.816-12.839-5.816H17.127C7.669 245.723 0 253.392 0 262.85c0 9.459 7.669 17.127 17.127 17.127H65.74c5.119 0 9.7-2.257 12.839-5.816 2.662-3.019 4.289-6.97 4.289-11.311-.001-4.341-1.629-8.292-4.291-11.311z"
        }
      ></path>
    </svg>
  );
}

export default SendSvgrepoComsvgIcon;
/* prettier-ignore-end */
