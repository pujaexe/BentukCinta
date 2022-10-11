import registerComponent from "@plasmicapp/host/registerComponent";
import { Image as AntdImage } from "antd";
import "antd/dist/antd.css";
import React, { ReactNode, useState } from "react";

export interface ImageProps {
    className?: string;
    imageURL?: string;
    children?: ReactNode;
    height?: string;
    width?: string;
}

export function Image({imageURL, className,width,height}: ImageProps){
    
    return ( 
    <AntdImage
    rootClassName={className}
    width={width}
    height={height}
    src={imageURL ?? ""}
    >
        
    </AntdImage>
    );
}

export function registerImage(){
    return registerComponent(Image, {
        name:"AntdImage",
        props: {
            imageURL: "string",
            height: "string",
            width: "string",
        },
        importPath: "./components/registerImage",
    });
}