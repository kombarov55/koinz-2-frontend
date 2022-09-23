import React from "react";
import Vertical from "./Vertical";

export default ({children, gap}) => {
    return <Vertical margin={"1vmax 10vmax"}
                     padding={"1vmax"}
                     alignItems={"stretch"}
                     boxShadowEnabled={true}
                     width={"90%"}
                     gap={gap}>
        {children}
    </Vertical>
}