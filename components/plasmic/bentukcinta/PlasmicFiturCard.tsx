// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6366ps4JUXGcyRNfgAokBX
// Component: bQ8noILEe4
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
import sty from "./PlasmicFiturCard.module.css"; // plasmic-import: bQ8noILEe4/css

import SendSvgrepoComsvgIcon from "./icons/PlasmicIcon__SendSvgrepoComsvg"; // plasmic-import: -5p-U1Ff7j/icon

export type PlasmicFiturCard__VariantMembers = {};

export type PlasmicFiturCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicFiturCard__VariantsArgs;
export const PlasmicFiturCard__VariantProps = new Array<VariantPropType>();

export type PlasmicFiturCard__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFiturCard__ArgsType;
export const PlasmicFiturCard__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicFiturCard__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultFiturCardProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

function PlasmicFiturCard__RenderFunc(props: {
  variants: PlasmicFiturCard__VariantsArgs;
  args: PlasmicFiturCard__ArgsType;
  overrides: PlasmicFiturCard__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__acxj6)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <SendSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__rnRzH)}
                role={"img"}
              />
            ),

            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      ) : null}

      <div className={classNames(projectcss.all, sty.freeBox__wcOvr)}>
        {p.renderPlasmicSlot({
          defaultContents: "Praktis",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__e97Nt)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "Memeberikan informasi detail pasangan dan lokasi waktu upacara.",
          value: args.slot2,
          className: classNames(sty.slotTargetSlot2)
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFiturCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFiturCard__VariantsArgs;
    args?: PlasmicFiturCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFiturCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFiturCard__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFiturCard__ArgProps,
          internalVariantPropNames: PlasmicFiturCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFiturCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFiturCard";
  } else {
    func.displayName = `PlasmicFiturCard.${nodeName}`;
  }
  return func;
}

export const PlasmicFiturCard = Object.assign(
  // Top-level PlasmicFiturCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFiturCard
    internalVariantProps: PlasmicFiturCard__VariantProps,
    internalArgProps: PlasmicFiturCard__ArgProps
  }
);

export default PlasmicFiturCard;
/* prettier-ignore-end */
