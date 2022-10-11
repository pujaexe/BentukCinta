// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6366ps4JUXGcyRNfgAokBX
// Component: cWWh_VXruR120
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
import { GraphCMSFetcher } from "@plasmicpkgs/plasmic-graphcms"; // plasmic-import: 8sYtOZawA08/codeComponent
import { GraphCMSField } from "@plasmicpkgs/plasmic-graphcms"; // plasmic-import: _3Kx5FMtA8n/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bentukcinta.module.css"; // plasmic-import: 6366ps4JUXGcyRNfgAokBX/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: cWWh_VXruR120/css

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  graphCmsFetcher?: p.Flex<typeof GraphCMSFetcher>;
  freeBox?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  graphCmsField?: p.Flex<typeof GraphCMSField>;
};

export interface DefaultHomepageProps {}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Welcome to your first page."}
            </h1>

            <GraphCMSFetcher
              data-plasmic-name={"graphCmsFetcher"}
              data-plasmic-override={overrides.graphCmsFetcher}
              className={classNames("__wab_instance", sty.graphCmsFetcher)}
              noLayout={false}
              query={{
                query:
                  "query MyQuery {\n  pengantins {\n    id\n    slug\n    title\n  }\n}\n",
                variables: {}
              }}
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    className={classNames(projectcss.all, sty.freeBox)}
                  >
                    <p.PlasmicLink
                      data-plasmic-name={"link"}
                      data-plasmic-override={overrides.link}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link
                      )}
                      component={Link}
                      href={`/${(() => {
                        try {
                          return $ctx.graphCmsItem.slug;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "";
                          }
                          throw e;
                        }
                      })()}`}
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      <GraphCMSField
                        data-plasmic-name={"graphCmsField"}
                        data-plasmic-override={overrides.graphCmsField}
                        className={classNames(
                          "__wab_instance",
                          sty.graphCmsField
                        )}
                        path={["slug"]}
                      />
                    </p.PlasmicLink>
                  </div>
                )}
              </ph.DataCtxReader>
            </GraphCMSFetcher>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "h1",
    "graphCmsFetcher",
    "freeBox",
    "link",
    "graphCmsField"
  ],
  section: [
    "section",
    "h1",
    "graphCmsFetcher",
    "freeBox",
    "link",
    "graphCmsField"
  ],
  h1: ["h1"],
  graphCmsFetcher: ["graphCmsFetcher", "freeBox", "link", "graphCmsField"],
  freeBox: ["freeBox", "link", "graphCmsField"],
  link: ["link", "graphCmsField"],
  graphCmsField: ["graphCmsField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  h1: "h1";
  graphCmsFetcher: typeof GraphCMSFetcher;
  freeBox: "div";
  link: "a";
  graphCmsField: typeof GraphCMSField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    graphCmsFetcher: makeNodeComponent("graphCmsFetcher"),
    freeBox: makeNodeComponent("freeBox"),
    link: makeNodeComponent("link"),
    graphCmsField: makeNodeComponent("graphCmsField"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "bentukcinta",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
