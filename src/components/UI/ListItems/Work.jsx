import React from "react";
import Vertical from "../Layout/Vertical";
import Horizontal from "../Layout/Horizontal";
import Img from "../UIComponents/Img";
import Label from "../UIComponents/Label";
import Button from "../UIComponents/Button";

export default ({dto}) => {
    const {src, name, description, salary, requirements} = dto

    return <Vertical margin={"1vmax 10vmax"}
                     padding={"1vmax"}
                     width={"90%"}
                     alignItems={"stretch"}
                     boxShadowEnabled={true}
    >
        <Horizontal justifyContent={"flex-start"} gap={"2vmax"}>
            <Img src={src}/>
            <Label text={name} size={"big"}/>
        </Horizontal>
        <Label text={description}/>

        <Vertical alignItems={"flex-start"} gap={"0"}>
            <Label text={"Требования:"}/>
            {requirements.map(v => <Label text={`- ${v}`}/>)}
        </Vertical>

        <Label text={`$${salary} в час`} color={"rgb(11 155 82)"} fontWeight={"bold"}/>
        <Button text={"Устроиться"}/>
    </Vertical>
}