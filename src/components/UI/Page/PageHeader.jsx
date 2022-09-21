import React from "react";
import Icon from "../UIComponents/Icon";
import {useNavigate} from "react-router-dom";

export default props => {
    const navigate = useNavigate()

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "3vw",
            justifyContent: "flex-end",

            width: "95vw"
        }}>
            <h1>header</h1>
        </div>

    )
}
