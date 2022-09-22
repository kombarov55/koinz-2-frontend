import React from "react";
import Page from "../UI/Page/Page";
import List from "../UI/Layout/List";
import Vertical from "../UI/Layout/Vertical";
import ImgButton from "../UI/UIComponents/ImgButton";
import Icons from "../../Util/Icons";

export default ({}) => {
    return <Page title={"Магазин"}>
        <Vertical alignItems={"stretch"} width={"80%"}>
            <ImgButton text={"Одежда"} src={Icons.clothes}/>
            <ImgButton text={"Гаджеты"} src={Icons.smartphone}/>
            <ImgButton text={"Транспорт"} src={Icons.vehicle}/>
            <ImgButton text={"Имущество"} src={Icons.tv}/>
            <ImgButton text={"Недвижимость"} src={Icons.realEstate}/>
        </Vertical>
    </Page>
}