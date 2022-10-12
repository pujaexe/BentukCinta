// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6366ps4JUXGcyRNfgAokBX
// Component: tV2xuA4xJL
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
import Template1 from "../../Template1"; // plasmic-import: GJ6j9vTAsC/component
import { AudioPlayer } from "../../registerAudioplayer"; // plasmic-import: mA6Gaqg1fB/codeComponent
import Template2 from "../../Template2"; // plasmic-import: ZsxWBfHDXcp/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bentukcinta.module.css"; // plasmic-import: 6366ps4JUXGcyRNfgAokBX/projectcss
import sty from "./PlasmicTemplateSelector.module.css"; // plasmic-import: tV2xuA4xJL/css

export type PlasmicTemplateSelector__VariantMembers = {
  template: "template1" | "template2";
};

export type PlasmicTemplateSelector__VariantsArgs = {
  template?: SingleChoiceArg<"template1" | "template2">;
};

type VariantPropType = keyof PlasmicTemplateSelector__VariantsArgs;
export const PlasmicTemplateSelector__VariantProps = new Array<VariantPropType>(
  "template"
);

export type PlasmicTemplateSelector__ArgsType = {
  template1?: React.ReactNode;
  template2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTemplateSelector__ArgsType;
export const PlasmicTemplateSelector__ArgProps = new Array<ArgPropType>(
  "template1",
  "template2"
);

export type PlasmicTemplateSelector__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTemplateSelectorProps {
  template1?: React.ReactNode;
  template2?: React.ReactNode;
  template?: SingleChoiceArg<"template1" | "template2">;
  className?: string;
}

function PlasmicTemplateSelector__RenderFunc(props: {
  variants: PlasmicTemplateSelector__VariantsArgs;
  args: PlasmicTemplateSelector__ArgsType;
  overrides: PlasmicTemplateSelector__OverridesType;

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
        sty.root,
        {
          [sty.roottemplate_template1]: hasVariant(
            variants,
            "template",
            "template1"
          ),
          [sty.roottemplate_template2]: hasVariant(
            variants,
            "template",
            "template2"
          )
        }
      )}
    >
      {(hasVariant(variants, "template", "template2") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: (
              <Template1
                className={classNames("__wab_instance", sty.template1__af3U)}
              />
            ),

            value: args.template1
          })
        : null}
      {(hasVariant(variants, "template", "template2") ? true : false)
        ? p.renderPlasmicSlot({
            defaultContents: (
              <Template2
                className={classNames("__wab_instance", sty.template2__xs8Uz)}
              />
            ),

            value: args.template2
          })
        : null}
    </div>
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
  PlasmicTemplateSelector__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTemplateSelector__VariantsArgs;
    args?: PlasmicTemplateSelector__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTemplateSelector__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTemplateSelector__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTemplateSelector__ArgProps,
          internalVariantPropNames: PlasmicTemplateSelector__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTemplateSelector__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTemplateSelector";
  } else {
    func.displayName = `PlasmicTemplateSelector.${nodeName}`;
  }
  return func;
}

export const PlasmicTemplateSelector = Object.assign(
  // Top-level PlasmicTemplateSelector renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTemplateSelector
    internalVariantProps: PlasmicTemplateSelector__VariantProps,
    internalArgProps: PlasmicTemplateSelector__ArgProps
  }
);

export default PlasmicTemplateSelector;
/* prettier-ignore-end */
