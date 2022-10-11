// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6366ps4JUXGcyRNfgAokBX
// Component: GJ6j9vTAsC
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bentukcinta.module.css"; // plasmic-import: 6366ps4JUXGcyRNfgAokBX/projectcss
import sty from "./PlasmicTemplate1.module.css"; // plasmic-import: GJ6j9vTAsC/css

export type PlasmicTemplate1__VariantMembers = {};
export type PlasmicTemplate1__VariantsArgs = {};
type VariantPropType = keyof PlasmicTemplate1__VariantsArgs;
export const PlasmicTemplate1__VariantProps = new Array<VariantPropType>();

export type PlasmicTemplate1__ArgsType = {
  bgMasshead?: React.ReactNode;
  title?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTemplate1__ArgsType;
export const PlasmicTemplate1__ArgProps = new Array<ArgPropType>(
  "bgMasshead",
  "title"
);

export type PlasmicTemplate1__OverridesType = {
  root?: p.Flex<"div">;
  hero?: p.Flex<"header">;
  imageContainer?: p.Flex<"div">;
};

export interface DefaultTemplate1Props {
  bgMasshead?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}

function PlasmicTemplate1__RenderFunc(props: {
  variants: PlasmicTemplate1__VariantsArgs;
  args: PlasmicTemplate1__ArgsType;
  overrides: PlasmicTemplate1__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      {true ? (
        <header
          data-plasmic-name={"hero"}
          data-plasmic-override={overrides.hero}
          className={classNames(projectcss.all, sty.hero)}
        >
          <div
            data-plasmic-name={"imageContainer"}
            data-plasmic-override={overrides.imageContainer}
            className={classNames(projectcss.all, sty.imageContainer)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__t4FxX)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  loading={"lazy" as const}
                />
              ),

              value: args.bgMasshead
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__tlr7I)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yidOo
              )}
            >
              {"UNDANGAN PERNIKAHAN"}
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__zMpa1)}>
                {p.renderPlasmicSlot({
                  defaultContents: "Jonh & Merry",
                  value: args.title,
                  className: classNames(sty.slotTargetTitle)
                })}
              </div>
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4LbFi
              )}
            >
              {
                "WE INVITE YOU TO CELEBRATE\nWITH US THE MOST SPECIAL DAY IN OUR LIFES"
              }
            </div>
          </div>
        </header>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "hero", "imageContainer"],
  hero: ["hero", "imageContainer"],
  imageContainer: ["imageContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  hero: "header";
  imageContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTemplate1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTemplate1__VariantsArgs;
    args?: PlasmicTemplate1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTemplate1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTemplate1__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTemplate1__ArgProps,
          internalVariantPropNames: PlasmicTemplate1__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTemplate1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTemplate1";
  } else {
    func.displayName = `PlasmicTemplate1.${nodeName}`;
  }
  return func;
}

export const PlasmicTemplate1 = Object.assign(
  // Top-level PlasmicTemplate1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hero: makeNodeComponent("hero"),
    imageContainer: makeNodeComponent("imageContainer"),

    // Metadata about props expected for PlasmicTemplate1
    internalVariantProps: PlasmicTemplate1__VariantProps,
    internalArgProps: PlasmicTemplate1__ArgProps
  }
);

export default PlasmicTemplate1;
/* prettier-ignore-end */
