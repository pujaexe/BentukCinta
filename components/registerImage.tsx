import registerComponent,{ComponentMeta,} from "@plasmicapp/host/registerComponent";
import { classNames } from "@plasmicapp/react-web";
import {Image as ImageAntd } from "antd";
import "antd/dist/antd.css";
import React from "react";

export interface AntdImageProps{
    src?: string;
    className?: string;
}

export function AntdImage({src,className}:AntdImageProps){
    return (
        <ImageAntd
        rootClassName={className}
        src={src}
        >
            
        </ImageAntd>
    );

}
export function registerImage(){ 
    return registerComponent(AntdImage, {
        name: 'AntdImage',
        props: {
            src: {
            type: "string",
            defaultValue: "https://via.placeholder.com/150",
            },
        },
        importPath: "./components/registerImage",
    });
}