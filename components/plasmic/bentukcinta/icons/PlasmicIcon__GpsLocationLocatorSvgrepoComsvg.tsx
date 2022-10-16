// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GpsLocationLocatorSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function GpsLocationLocatorSvgrepoComsvgIcon(
  props: GpsLocationLocatorSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 24 24"}
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
          "M12 2a8 8 0 00-8 8c0 5.4 7 11.5 7.35 11.76l.65.56.65-.56C13 21.5 20 15.4 20 10a8 8 0 00-8-8zm0 12a4 4 0 114-4 4 4 0 01-4 4z"
        }
      ></path>

      <circle cx={"12"} cy={"10"} r={"2"}></circle>
    </svg>
  );
}

export default GpsLocationLocatorSvgrepoComsvgIcon;
/* prettier-ignore-end */
