import React from "react";
import Icon from "../UIComponents/Icon";
import {useNavigate} from "react-router-dom";
import Avatar from "../Icons/Avatar";
import Label from "../UIComponents/Label";

export default props => {
    const navigate = useNavigate()

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "3vw",
            justifyContent: "flex-start",
            alignItems: "center",

            width: "95vw",
            marginLeft: "1vmax"
        }}>
            <Avatar src={"https://sun1-25.userapi.com/s/v1/ig2/k86VwksM-5qLte5T4acaWr-qOL9bWXxUXaIYAHtyvfFbkBWkrFNBGcko3rxa0mkFtxKKXcVxXRbOfzqoIAwVogmB.jpg?size=50x50&quality=96&crop=126,0,342,342&ava=1"}/>
            <Label text={"Главная"} size={"big"}/>
        </div>

    )
}
