import React from "react";

export default function ({
                             children,
                             justifyContent = "space-around",
                             width = "100%",
                             padding = "",
                             gap = "0"
                         }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: justifyContent,
            width: width,
            padding: padding,
            gap: gap
        }}>
            {children}
        </div>
    )
}