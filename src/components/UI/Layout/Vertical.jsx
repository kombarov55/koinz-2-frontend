import React from "react";

export default function ({
                             children,
                             alignItems = "center",
                             width = "100%",
                             margin = "",
                             padding = "",
                             border = "none",
                             boxShadowEnabled = false
                         }) {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            width: width,
            alignItems: alignItems,
            margin: margin,
            padding: padding,
            border: border,
            borderRadius: "1vmin",
            boxShadow: boxShadowEnabled ? "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)" : "none"
        }}>
            {children}
        </div>
    )

}