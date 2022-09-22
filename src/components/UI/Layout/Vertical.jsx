import React from "react";

export default function ({
                             children,
                             alignItems = "center",
                             width = "100%",
                             margin = "",
                             padding = "",
                             border = "none"
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
            borderRadius: "1vmin"
        }}>
            {children}
        </div>
    )

}