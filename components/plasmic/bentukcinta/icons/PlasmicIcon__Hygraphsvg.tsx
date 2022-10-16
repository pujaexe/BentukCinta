// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HygraphsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HygraphsvgIcon(props: HygraphsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 117 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#8SHIOoINqa)"} fill={"#000"}>
        <path
          d={
            "M39.157 14.162v7.598h-3.311v-6.69c0-.422-.104-.8-.312-1.135a2.213 2.213 0 00-.816-.813 2.17 2.17 0 00-1.128-.298 2.234 2.234 0 00-1.955 1.11c-.2.335-.3.714-.3 1.136v6.69h-3.311l-.012-17.92h3.31l.013 6.857c.4-.382.868-.68 1.404-.896a4.623 4.623 0 011.715-.322c.872 0 1.66.21 2.364.633.711.422 1.28.987 1.703 1.696.424.701.636 1.486.636 2.354zm9.82-4.349h3.528l-6.575 17.92h-3.503l2.16-5.973-4.32-11.947h3.624l2.351 7.443 2.735-7.443zm13.415 0h3.311v12.114c0 .884-.18 1.68-.54 2.39a5.592 5.592 0 01-1.475 1.84c-.616.509-1.328.9-2.136 1.17-.8.27-1.647.406-2.543.406-.848 0-1.66-.167-2.435-.502a6.64 6.64 0 01-2.064-1.362 6.374 6.374 0 01-1.403-2.006l3.023-1.374c.168.398.396.74.684 1.027.296.287.632.506 1.007.657.384.16.78.239 1.188.239.44 0 .86-.052 1.26-.155a3.644 3.644 0 001.092-.466c.32-.207.571-.466.755-.777.184-.31.276-.673.276-1.087v-1.386a4.43 4.43 0 01-1.343 1.111c-.52.28-1.124.418-1.812.418a6.1 6.1 0 01-2.435-.49 6.42 6.42 0 01-1.992-1.35 6.497 6.497 0 01-1.355-2.006 6.06 6.06 0 01-.492-2.438c0-.868.164-1.68.492-2.437a6.35 6.35 0 011.355-1.995 6.32 6.32 0 011.992-1.362 6.102 6.102 0 012.435-.49c.688 0 1.292.144 1.812.43a4.3 4.3 0 011.343 1.1V9.813zm-3.107 9.092a2.7 2.7 0 001.476-.419c.44-.286.783-.665 1.031-1.134.259-.481.39-1.02.384-1.566 0-.573-.128-1.095-.384-1.564a2.892 2.892 0 00-1.031-1.135 2.7 2.7 0 00-1.476-.419c-.536 0-1.028.14-1.476.419-.44.278-.791.657-1.055 1.135a3.139 3.139 0 00-.396 1.565c0 .573.132 1.099.396 1.576.264.47.616.845 1.055 1.123.448.28.94.419 1.476.419zm8.979 2.855l-.012-11.947h3.31l.013.884c.4-.382.868-.68 1.404-.896a4.622 4.622 0 011.715-.322c.44 0 .88.063 1.32.19l-1.308 3.334a2.258 2.258 0 00-.876-.18 2.234 2.234 0 00-2.255 2.247v6.69h-3.311zM85.23 9.813h3.311V21.76h-3.323l-.156-1.243c-.31.46-.72.844-1.2 1.123-.487.287-1.06.43-1.715.43a6.267 6.267 0 01-2.508-.501 6.56 6.56 0 01-3.443-3.429 6.408 6.408 0 01-.492-2.509 6.098 6.098 0 01.468-2.39 6.056 6.056 0 011.32-1.958 6.286 6.286 0 011.955-1.326 6.03 6.03 0 012.4-.478c.736 0 1.396.155 1.98.466.591.31 1.107.704 1.547 1.182l-.144-1.314zm-3.167 9.092a2.701 2.701 0 001.475-.419c.44-.278.788-.653 1.044-1.123a3.28 3.28 0 00.384-1.576 3.24 3.24 0 00-.384-1.577 3.006 3.006 0 00-1.044-1.123 2.7 2.7 0 00-1.475-.419 2.78 2.78 0 00-1.5.419c-.448.28-.817.67-1.068 1.135a3.14 3.14 0 00-.395 1.565c0 .573.132 1.099.395 1.576.272.47.632.845 1.08 1.123a2.76 2.76 0 001.488.419zm12.311 8.828h-3.312V9.813h3.312v1.29c.383-.47.84-.852 1.367-1.146.528-.303 1.144-.454 1.848-.454a6.13 6.13 0 012.447.49 6.24 6.24 0 012.016 1.361 6.347 6.347 0 011.355 1.995c.331.77.498 1.6.492 2.438 0 .868-.164 1.684-.492 2.449a6.47 6.47 0 01-1.355 2.019 6.344 6.344 0 01-2.016 1.35 6.132 6.132 0 01-2.447.49c-.704 0-1.32-.152-1.848-.455a4.993 4.993 0 01-1.367-1.146v7.24-.001zm3.167-15.065c-.544 0-1.036.144-1.476.43-.434.28-.789.667-1.032 1.123-.248.47-.371.992-.371 1.566 0 .573.123 1.099.371 1.576.256.47.6.845 1.032 1.123a2.7 2.7 0 001.476.419c.544 0 1.04-.14 1.487-.419a3.037 3.037 0 001.08-1.123 3.1 3.1 0 00.408-1.576c0-.566-.132-1.084-.396-1.554a3.012 3.012 0 00-1.08-1.135 2.723 2.723 0 00-1.5-.43h.001zm18.791 1.494v7.598h-3.311v-6.69c0-.422-.104-.8-.312-1.135a2.217 2.217 0 00-.816-.813 2.17 2.17 0 00-1.128-.298 2.232 2.232 0 00-1.955 1.11c-.2.335-.3.714-.3 1.136v6.69h-3.312l-.012-17.92h3.312l.012 6.857c.4-.382.867-.68 1.403-.896a4.625 4.625 0 011.716-.322c.872 0 1.659.21 2.363.633.712.422 1.28.987 1.704 1.696.424.701.636 1.486.636 2.354z"
          }
        ></path>

        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M14.9 4.267L11.175 6.4 7.45 8.533l-3.725 2.134v12.8l3.725-2.134 3.725-2.133v-4.267L7.45 17.067V12.8l3.725-2.133L14.9 8.533v12.8l-3.725 2.134L7.45 25.6l-3.725 2.133L0 29.866 3.725 32l3.725-2.134 3.725-2.133L14.9 25.6l3.726-2.133V2.133L14.9 0v4.267z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"8SHIOoINqa"}>
          <path fill={"#fff"} d={"M0 0h117v32H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default HygraphsvgIcon;
/* prettier-ignore-end */
