import React from "react";
import Vertical from "../../UI/Layout/Vertical";
import Horizontal from "../../UI/Layout/Horizontal";
import Img from "../../UI/UIComponents/Img";
import Icons from "../../../Util/Icons";
import Label from "../../UI/UIComponents/Label";

export default ({money, xp}) => {
    return <Vertical margin={"1vmax 10vmax"}
                     padding={"1vmax"}
                     alignItems={"stretch"}
                     boxShadowEnabled={true}
                     width={"90%"}>
        <Horizontal justifyContent={"flex-start"}
                    gap={"2vmax"}>
            <Img src={Icons.wallet} size={"small"}/>
            <Label text={`Баланс: $${money}`}/>
        </Horizontal>

        <Horizontal justifyContent={"flex-start"}
                    gap={"2vmax"}>
            <Img src={Icons.books} size={"small"}/>
            <Label text={`Опыт: ${xp} xp`}/>
        </Horizontal>
    </Vertical>
}