// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SoundSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SoundSvgrepoComsvgIcon(props: SoundSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 32 32"}
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
          "M16 6v20c0 1.1-.772 1.537-1.715.971l-6.57-3.942C6.772 22.463 5.1 22 4 22H3c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h1c1.1 0 2.772-.463 3.715-1.029l6.57-3.942C15.228 4.463 16 4.9 16 6zm10.606-.606a2 2 0 10-2.828 2.828C25.855 10.3 27 13.062 27 16s-1.145 5.7-3.222 7.778a2 2 0 102.828 2.828C29.439 23.773 31 20.007 31 16s-1.561-7.773-4.394-10.606zm-4.243 4.242a2 2 0 10-2.828 2.828C20.479 13.409 21 14.664 21 16s-.52 2.591-1.464 3.535a2 2 0 102.828 2.828C24.064 20.664 25 18.404 25 16s-.937-4.664-2.637-6.364z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SoundSvgrepoComsvgIcon;
/* prettier-ignore-end */
