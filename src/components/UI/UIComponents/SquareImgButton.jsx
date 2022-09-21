import React from "react";
import Label from "./Label";

export default ({src, text}) => {
    return <div style={{
        display: "flex",
        flexDirection: "column",


        width: "8vmax",
        height: "8vmax"
    }}>
        <img src={src}/>
        <Label size={"medium"} text={text}/>
    </div>
}