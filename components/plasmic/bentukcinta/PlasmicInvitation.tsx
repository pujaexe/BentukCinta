// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6366ps4JUXGcyRNfgAokBX
// Component: ygw79zXKnU
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
import TemplateSelector from "../../TemplateSelector"; // plasmic-import: tV2xuA4xJL/component
import Template1 from "../../Template1"; // plasmic-import: GJ6j9vTAsC/component
import { AudioPlayer } from "../../registerAudioplayer"; // plasmic-import: mA6Gaqg1fB/codeComponent
import Template2 from "../../Template2"; // plasmic-import: ZsxWBfHDXcp/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bentukcinta.module.css"; // plasmic-import: 6366ps4JUXGcyRNfgAokBX/projectcss
import sty from "./PlasmicInvitation.module.css"; // plasmic-import: ygw79zXKnU/css

export type PlasmicInvitation__VariantMembers = {};

export type PlasmicInvitation__VariantsArgs = {};
type VariantPropType = keyof PlasmicInvitation__VariantsArgs;
export const PlasmicInvitation__VariantProps = new Array<VariantPropType>();

export type PlasmicInvitation__ArgsType = {};
type ArgPropType = keyof PlasmicInvitation__ArgsType;
export const PlasmicInvitation__ArgProps = new Array<ArgPropType>();

export type PlasmicInvitation__OverridesType = {
  root?: p.Flex<"div">;
  graphCmsFetcher?: p.Flex<typeof GraphCMSFetcher>;
  templateSelector?: p.Flex<typeof TemplateSelector>;
  template1?: p.Flex<typeof Template1>;
  audioPlayer?: p.Flex<typeof AudioPlayer>;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultInvitationProps {}

function PlasmicInvitation__RenderFunc(props: {
  variants: PlasmicInvitation__VariantsArgs;
  args: PlasmicInvitation__ArgsType;
  overrides: PlasmicInvitation__OverridesType;

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
    <React.Fragment>
      <Head></Head>

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
          <GraphCMSFetcher
            data-plasmic-name={"graphCmsFetcher"}
            data-plasmic-override={overrides.graphCmsFetcher}
            className={classNames("__wab_instance", sty.graphCmsFetcher)}
            noLayout={true}
            query={(() => {
              try {
                return {
                  query:
                    'query MyQuery {\n pengantin(where: {slug: "' +
                    $ctx.params.slug +
                    '"}) {\n slug\n title\n eventLocation\n gmapsEmbed\n evenDateTime\n eventMap {\n latitude\n longitude\n }\n phone1\n phone2\n pengantinPria\n pengantinWanita\n bapakPria\n bapakWanita\n ibuPria\n ibuWanita\n alamatPria\n alamatWanita\n coverPhoto\n photoPria\n photoWanita\n youtubeUrl\n templateUse\n audioUrl\n galleries {photoGallery}}\n}\n',
                  variables: {}
                };
              } catch (e) {
                if (e instanceof TypeError) {
                  return undefined;
                }
                throw e;
              }
            })()}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <TemplateSelector
                  data-plasmic-name={"templateSelector"}
                  data-plasmic-override={overrides.templateSelector}
                  className={classNames("__wab_instance", sty.templateSelector)}
                  template={$ctx.graphCmsItem.templateUse}
                  template1={
                    <Template1
                      data-plasmic-name={"template1"}
                      data-plasmic-override={overrides.template1}
                      address={(() => {
                        try {
                          return $ctx.graphCmsItem.eventLocation;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "date&time";
                          }
                          throw e;
                        }
                      })()}
                      alamatPria={(() => {
                        try {
                          return $ctx.graphCmsItem.alamatPria;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "This is address wrapper";
                          }
                          throw e;
                        }
                      })()}
                      alamatWanita={(() => {
                        try {
                          return $ctx.graphCmsItem.alamatWanita;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "This is address wrapper";
                          }
                          throw e;
                        }
                      })()}
                      audio={
                        <AudioPlayer
                          data-plasmic-name={"audioPlayer"}
                          data-plasmic-override={overrides.audioPlayer}
                          audioURL={(() => {
                            try {
                              return $ctx.graphCmsItem.audioUrl;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                          className={classNames(
                            "__wab_instance",
                            sty.audioPlayer
                          )}
                        />
                      }
                      bgMasshead={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__gaRpc)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={(() => {
                            try {
                              return $ctx.graphCmsItem.coverPhoto;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "https://via.placeholder.com/1920x1080";
                              }
                              throw e;
                            }
                          })()}
                        />
                      }
                      className={classNames("__wab_instance", sty.template1)}
                      date={(() => {
                        try {
                          return $ctx.graphCmsItem.evenDateTime.slice(8, 10);
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "date&time";
                          }
                          throw e;
                        }
                      })()}
                      imgPria={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__kfkVq)}
                          displayHeight={"200px" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"200px" as const}
                          loading={"lazy" as const}
                          src={(() => {
                            try {
                              return $ctx.graphCmsItem.photoPria;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "https://via.placeholder.com/200";
                              }
                              throw e;
                            }
                          })()}
                        />
                      }
                      imgWanita={
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__hcMok)}
                          displayHeight={"200px" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"200px" as const}
                          loading={"lazy" as const}
                          src={(() => {
                            try {
                              return $ctx.graphCmsItem.photoWanita;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "https://via.placeholder.com/200";
                              }
                              throw e;
                            }
                          })()}
                        />
                      }
                      month={(() => {
                        try {
                          return $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 1
                            ? "Jan"
                            : $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 2
                            ? "Feb"
                            : $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 3
                            ? "Mar"
                            : $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 4
                            ? "Apr"
                            : $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 5
                            ? "May"
                            : $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 6
                            ? "Jun"
                            : $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 7
                            ? "Jul"
                            : $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 8
                            ? "Aug"
                            : $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 9
                            ? "Sep"
                            : $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 10
                            ? "Oct"
                            : $ctx.graphCmsItem.evenDateTime.slice(5, 7) == 11
                            ? "Nov"
                            : "Dec";
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "date&time";
                          }
                          throw e;
                        }
                      })()}
                      namaPria={(() => {
                        try {
                          return $ctx.graphCmsItem.pengantinPria;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "John Stewart";
                          }
                          throw e;
                        }
                      })()}
                      namaPria2={(() => {
                        try {
                          return $ctx.graphCmsItem.pengantinWanita;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "John Stewart";
                          }
                          throw e;
                        }
                      })()}
                      ortuPria={(() => {
                        try {
                          return (
                            $ctx.graphCmsItem.bapakPria +
                            " & " +
                            $ctx.graphCmsItem.ibuPria
                          );
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "john lenon & John Lenin";
                          }
                          throw e;
                        }
                      })()}
                      ortuWanita={(() => {
                        try {
                          return (
                            $ctx.graphCmsItem.bapakWanita +
                            " & " +
                            $ctx.graphCmsItem.ibuWanita
                          );
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "john lenon & John Lenin";
                          }
                          throw e;
                        }
                      })()}
                      slot={(() => {
                        try {
                          return $ctx.graphCmsItem.galleries;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return [];
                          }
                          throw e;
                        }
                      })().map((currentItem, currentIndex) => (
                        <div
                          data-plasmic-name={"freeBox"}
                          data-plasmic-override={overrides.freeBox}
                          className={classNames(projectcss.all, sty.freeBox)}
                          key={currentIndex}
                        >
                          <div
                            data-plasmic-name={"text"}
                            data-plasmic-override={overrides.text}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text
                            )}
                          >
                            {"Enter some text"}
                          </div>
                        </div>
                      ))}
                      time={(() => {
                        try {
                          return (
                            $ctx.graphCmsItem.evenDateTime.slice(11, 16) +
                            " s/d Selesai"
                          );
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "time";
                          }
                          throw e;
                        }
                      })()}
                      year={(() => {
                        try {
                          return $ctx.graphCmsItem.evenDateTime.slice(0, 4);
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return "date&time";
                          }
                          throw e;
                        }
                      })()}
                    />
                  }
                />
              )}
            </ph.DataCtxReader>
          </GraphCMSFetcher>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "graphCmsFetcher",
    "templateSelector",
    "template1",
    "audioPlayer",
    "freeBox",
    "text"
  ],
  graphCmsFetcher: [
    "graphCmsFetcher",
    "templateSelector",
    "template1",
    "audioPlayer",
    "freeBox",
    "text"
  ],
  templateSelector: [
    "templateSelector",
    "template1",
    "audioPlayer",
    "freeBox",
    "text"
  ],
  template1: ["template1", "audioPlayer", "freeBox", "text"],
  audioPlayer: ["audioPlayer"],
  freeBox: ["freeBox", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  graphCmsFetcher: typeof GraphCMSFetcher;
  templateSelector: typeof TemplateSelector;
  template1: typeof Template1;
  audioPlayer: typeof AudioPlayer;
  freeBox: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInvitation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInvitation__VariantsArgs;
    args?: PlasmicInvitation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInvitation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInvitation__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicInvitation__ArgProps,
          internalVariantPropNames: PlasmicInvitation__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicInvitation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInvitation";
  } else {
    func.displayName = `PlasmicInvitation.${nodeName}`;
  }
  return func;
}

export const PlasmicInvitation = Object.assign(
  // Top-level PlasmicInvitation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    graphCmsFetcher: makeNodeComponent("graphCmsFetcher"),
    templateSelector: makeNodeComponent("templateSelector"),
    template1: makeNodeComponent("template1"),
    audioPlayer: makeNodeComponent("audioPlayer"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicInvitation
    internalVariantProps: PlasmicInvitation__VariantProps,
    internalArgProps: PlasmicInvitation__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicInvitation;
/* prettier-ignore-end */
