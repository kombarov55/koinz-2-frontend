import React from "react";

export default ({
                    text,
                    size = "medium",
                    textAlign = "start",
                    color = "black",
                    fontWeight = "normal"
                }) => {
    let fontSize = "";

    switch (size) {
        case "medium":
            fontSize = "3vmin"
            break;
        case "small":
            fontSize = "1vmax"
            break;
        case "normal":
            fontSize = "5vmin"
            break;
        case "big":
            fontSize = "8vmin"
            break;
    }
    return (
        <div style={{
            fontSize: fontSize,
            textAlign: textAlign,
            color: color,
            fontWeight: fontWeight
        }}>
            {text}
        </div>
    )
}