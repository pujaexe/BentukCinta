// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoSvgrepoComsvgIcon(props: InfoSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 460 460"}
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
          "M230 0C102.975 0 0 102.975 0 230s102.975 230 230 230 230-102.974 230-230S357.025 0 230 0zm38.333 377.36c0 8.676-7.034 15.71-15.71 15.71h-43.101c-8.676 0-15.71-7.034-15.71-15.71V202.477c0-8.676 7.033-15.71 15.71-15.71h43.101c8.676 0 15.71 7.033 15.71 15.71V377.36zM230 157c-21.539 0-39-17.461-39-39s17.461-39 39-39 39 17.461 39 39-17.461 39-39 39z"
        }
      ></path>
    </svg>
  );
}

export default InfoSvgrepoComsvgIcon;
/* prettier-ignore-end */
