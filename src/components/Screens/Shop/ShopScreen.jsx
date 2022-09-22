import React from "react";
import Page from "../../UI/Page/Page";
import Vertical from "../../UI/Layout/Vertical";
import ImgButton from "../../UI/UIComponents/ImgButton";
import Icons from "../../../Util/Icons";
import {useNavigate} from "react-router-dom";

export default ({}) => {
    const navigate = useNavigate();

    return <Page title={"Магазин"} centerStretched={true}>
        <Vertical alignItems={"stretch"} width={"80%"}>
            <ImgButton text={"Одежда"} src={Icons.clothes} onClick={() => navigate("/clothes")}/>
            <ImgButton text={"Гаджеты"} src={Icons.smartphone} onClick={() => navigate("/gadgets")}/>
            <ImgButton text={"Транспорт"} src={Icons.vehicle} onClick={() => navigate("/vehicles")}/>
            <ImgButton text={"Имущество"} src={Icons.tv} onClick={() => navigate("/property")}/>
            <ImgButton text={"Недвижимость"} src={Icons.realEstate} onClick={() => navigate("/real-estate")}/>
        </Vertical>
    </Page>
}