// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuSvgrepoCom3SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuSvgrepoCom3SvgIcon(props: MenuSvgrepoCom3SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 210 210"}
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
          "M75 0H15C6.716 0 0 6.716 0 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15zm0 120H15c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15zM195 0h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15zm0 120h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15z"
        }
      ></path>
    </svg>
  );
}

export default MenuSvgrepoCom3SvgIcon;
/* prettier-ignore-end */
